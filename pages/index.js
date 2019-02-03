import { Component } from 'react'
import colors from '../utils/colors'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import Ticker from '../components/Ticker'
import WithCursor from '../components/WithCursor'

const topText = 'Woooop. I like to make things. This is my crazy place.'
const text = 'Hoi, ik ben Dennis Passway, Creative Developer met een achtergrond in design. Ik maak graag digitale dingen.'
const bottomText = 'Eerder werkte ik o.a. voor Bol.com, Fairtrade Original, Nespresso, Accenture, Enexis, Rijksoverheid en Velux.'

const title = 'Dennis Passway - Creative Developer'
const description = 'Ik ben een creative developer met een achtergrond in design. Ik maak graag digitale dingen voor grote- en kleine opdrachtgevers.'
const url = 'https://www.dennispassway.nl'
const ogImage = `${url}/static/og-image.jpg`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    user-select: none;
  }
`

const Container = styled.div`
  background-image: url(data:image/png;base64,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);
  background-color: ${props => props.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  transition: background-color 200ms ease-out;
`

const TickerContainer = styled.div`
  opacity: 0.2;
  margin-top: ${props => props.topOffsetS || 0}px;
    margin-bottom: ${props => props.bottomOffsetS || 0}px;

  @media (min-width: 768px) {
    margin-top: ${props => props.topOffset || 0}px;
    margin-bottom: ${props => props.bottomOffset || 0}px;
  }
`;

const LinksContainer = styled.div`
  align-items: center;
  bottom: 5px;
  display: flex;
  flex-direction: row;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  width: 90%;

  @media (min-width: 768px) {
    width: auto;
  }
`

const Link = styled.a`
  color: ${props => props.color};
  cursor: none;
  font-family: Walsheim, sans-serif;
  font-size: 14px;
  font-weight: regular;
  letter-spacing: 1px;
  line-height: 1;
  margin: 0;
  padding: 20px 10px;
  position: relative;
  text-decoration: none;
  text-transform: lowercase;
  transition: color 200ms ease-out;
  width: 25%;

  @media (min-width: 768px) {
    padding: 20px;
    width: auto;

    &::before {
      content: '';
    }
  }

  &::before {
    background-color: ${props => props.color};
    bottom: 16px;
    height: 1px;
    left: 20px;
    position: absolute;
    transition: width 200ms ease-out;
    width: 0;
  }

  &:hover::before {
    width: calc(100% - 40px);
  }
`

export default class Index extends Component {

  state = {
    colorPallete: { background: '#1812D6', color: '#FFFFFF' },
    cursorClickMode: false,
    mouseX: 300,
    windowWidth: 0,
  }

  componentDidMount() {
    this.mounted = true
    this.setWindowWidth()
    window.addEventListener('resize', this.setWindowWidth)
    this.setRandomColorPallette()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWindowWidth)
    this.mounted = false
  }

  setWindowWidth = () => this.mounted && this.setState({ windowWidth: window.innerWidth })

  setRandomColorPallette() {
    const colorPallete = colors[Math.floor(Math.random() * colors.length)]
    this.mounted && this.setState({ colorPallete })
  }

  render() {
    const { mouseX, windowWidth, colorPallete, cursorClickMode } = this.state
    const { background, color } = colorPallete
    const xPercentage = mouseX / windowWidth
    const speed = (windowWidth / 16) * (xPercentage - 0.5)

    return (
      <WithCursor color={color} clickMode={cursorClickMode}>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />

          <title>{title}</title>
          <meta name='title' content={title} />
          <meta name='description' content={description} />

          <meta property='og:type' content='website' />
          <meta property='og:url' content={url} />
          <meta property='og:title' content='{title}' />
          <meta property='og:description' content={description} />
          <meta property='og:image' content={ogImage} />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content={url} />
          <meta property='twitter:title' content='{title}' />
          <meta property='twitter:description' content={description} />
          <meta property='twitter:image' content={ogImage} />

          <link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />
          <link rel='manifest' href='/static/favicons/site.webmanifest' />
          <link rel='mask-icon' href='/static/favicons/safari-pinned-tab.svg' color='#000000' />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='msapplication-config' content='/static/favicons/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />

          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-28153061-4' />
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-28153061-4');
          `}} />

          <link rel='stylesheet' href='/static/f/floepie.css' />
        </Head>

        <Container color={background} onMouseMove={({ pageX }) => this.setState({ mouseX: pageX })} onClick={() => this.setRandomColorPallette()}>
          <GlobalStyle />
          <div>
            <TickerContainer bottomOffset={-200} bottomOffsetS={-70}>
              <Ticker smallFont color={color} speed={speed * 0.25} inverted>{topText}</Ticker>
            </TickerContainer>
            <Ticker color={color} speed={speed}>{text}</Ticker>
            <TickerContainer topOffset={-200} topOffsetS={-70}>
              <Ticker smallFont color={color} speed={speed * 0.5} inverted>{bottomText}</Ticker>
            </TickerContainer>
          </div>

          <LinksContainer>
            <Link onMouseEnter={() => this.setState({ cursorClickMode: true })} onMouseLeave={() => this.setState({ cursorClickMode: false })} color={color} href='https://www.github.com/dennispassway' target='_blank' rel='noopener noreferrer'>Github</Link>
            <Link onMouseEnter={() => this.setState({ cursorClickMode: true })} onMouseLeave={() => this.setState({ cursorClickMode: false })} color={color} href='https://www.linkedin.com/in/dennispassway' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>
            <Link onMouseEnter={() => this.setState({ cursorClickMode: true })} onMouseLeave={() => this.setState({ cursorClickMode: false })} color={color} href='https://www.twitter.com/dennispassway' target='_blank' rel='noopener noreferrer'>Twitter</Link>
            <Link onMouseEnter={() => this.setState({ cursorClickMode: true })} onMouseLeave={() => this.setState({ cursorClickMode: false })} color={color} href='mailto:dennispassway@gmail.com'>Mail mij!</Link>
          </LinksContainer>
        </Container>
      </WithCursor>
    )
  }
}
