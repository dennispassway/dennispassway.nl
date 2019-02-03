import { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  @media (min-width: 768px) {
    cursor: none;
  }
`

const CursorContainer = styled.div`
  display: none;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  z-index: 100000;

  @media (min-width: 768px) {
    display: block;
  }
`

const Cursor = styled.div`
  align-items: center;
  border-radius: 50%;
  border: solid 2px ${props => props.color};
  color: ${props => props.color};
  display: flex;
  font-family: Walsheim, sans-serif;
  font-size: 12px;
  font-weight: 800;
  height: ${props => props.clickMode ? 10 : 80}px;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
  transition: all 200ms ease-out;
  width: ${props => props.clickMode ? 10 : 80}px;
  transform: translate(-50%, -50%);
`

export default class WithCursor extends Component {

  state = {
    left: -500,
    top: -500,
    text: 'move'
  }

  componentDidMount() {
    this.interval = setInterval(this.setText, 1000)
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  setText = () => {
    const { text } = this.state

    if (text === 'move') { return this.mounted && this.setState({ text: 'or' }) }
    if (text === 'or') { return this.mounted && this.setState({ text: 'click' }) }
    if (text === 'click') { return this.mounted && this.setState({ text: 'and' }) }
    if (text === 'and') { return this.mounted && this.setState({ text: 'move' }) }
  }

  onMouseMove = ({ clientX, clientY }) => this.mounted && this.setState({ left: clientX, top: clientY })

  render() {
    const { color, clickMode } = this.props
    const { left, top, text } = this.state

    return (
      <Container onMouseMove={this.onMouseMove}>
        {this.props.children}
        <CursorContainer style={{ transform: `translate(${left}px, ${top}px)` }}>
          <Cursor color={color} clickMode={clickMode}>{clickMode ? '' : text}</Cursor>
        </CursorContainer>
      </Container>
    )
  }
}
