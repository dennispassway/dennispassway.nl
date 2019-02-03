import { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  user-select: none;
  width: 100%;
`

const FlexDiv = styled.div`
  display: flex;
`

const Text = styled.span`
  color: ${props => props.color};
  font-family: Walsheim, sans-serif;
  font-size: ${props => props.smallFont ? 75 : 150}px;
  font-weight: bold;
  letter-spacing: ${props => (props.smallFont ? 75 : 150) / 30 * -1}px;
  line-height: 1.3;
  overflow: hidden;
  padding-right: 100px;
  transition: color 200ms ease-out;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: ${props => props.smallFont ? 200 : 400}px;
    letter-spacing: ${props => (props.smallFont ? 200 : 400) / 30 * -1}px;
  }
`

export default class Ticker extends Component {

  state = {
    offsetTicker: 0,
    offsetContainer: 0,
    containerWidth: 1000000000000000,
    textWidth: 1000000000000000,
    windowWidth: 1000000000000000,
  }

  componentDidMount() {
    this.mounted = true
    this.updateWidths()
    requestAnimationFrame(this.setOffsets)
    window.addEventListener('resize', this.updateWidths)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidths)
    this.mounted = false
  }

  updateWidths = () => {
    this.mounted && this.setState({ containerWidth: 1000000000000000 })

    setTimeout(() => {
      const { width } = this.text.getBoundingClientRect()
      this.mounted && this.setState({ textWidth: width, containerWidth: width * 2, windowWidth: window.innerWidth, windowHeight: window.innerHeight })
    }, 100)
  }

  setOffsets = () => {
    const { offsetTicker, textWidth } = this.state

    if (offsetTicker <= 0) {
      this.mounted && this.setState({ offsetTicker: textWidth - 1 })
      return requestAnimationFrame(this.setOffsets)
    }

    if (offsetTicker >= textWidth) {
      this.mounted && this.setState({ offsetTicker: this.props.speed })
      return requestAnimationFrame(this.setOffsets)
    }

    this.mounted && this.setState({ offsetTicker: offsetTicker + this.props.speed })
    return requestAnimationFrame(this.setOffsets)
  }

  render() {
    const { offsetTicker, containerWidth, windowWidth } = this.state
    const { children, inverted, color, smallFont } = this.props
    const offset = inverted ? containerWidth - windowWidth - offsetTicker : offsetTicker

    return (
      <Container>
        <FlexDiv style={{ width: containerWidth, transform: `translateX(${-Math.round(offset)}px)` }}>
          <Text color={color} ref={el => { this.text = el }} smallFont={smallFont}>{children}</Text>
          <Text color={color} smallFont={smallFont}>{children}</Text>
        </FlexDiv>
      </Container>
    )
  }
}
