import styled from 'styled-components';
import RandExp from 'randexp';
import GlobalFonts from './fonts/fonts'

function App() {

  const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  //Title
  const ReactBootstrapH1 = ({className, children}) => {
    return <h1 className={className}>
      {children}
    </h1>
  }

  const Title = styled(ReactBootstrapH1)`
    font-size: 3rem;
    font-weight: bold;
  `

  //Subtitle
  const ReactBootstrapH4 = ({className, children}) => {
    return <h4 className={className}>
      {children}
    </h4>
  }

  const Subtitle = styled(ReactBootstrapH4)`
    font-weight: 500;
  `

  //R6 Name
  const R6Name = styled(ReactBootstrapH4)`
    font-family: 'Scout Condensed';
    font-weight: bold;
    font-size: 1.2rem;
    color: white;
    padding: 0 0.6rem;
    margin: 0;
    background-color: ${ReactBootstrapH4};
    /* background-color: #1387E1;
    background-color: #FF3131;
    background-color: #FF932E; */
    /* -webkit-text-stroke: 0.1px black; */
  `
  //gun icon
  const gunImage = ({src, className, children}) => {
    return <img src={src} className={className}>
      {children}
    </img>
  }
  const GunIcon = styled(gunImage)`
    height: 1.2rem;
    background-color: white;
  `
  //KillFeed
  const KillFeed = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
  `;
  

  return (
    <Container>
      <GlobalFonts />
      <Title>Barcode Name Generator</Title>
      <Subtitle>Generate bullshit barcode names like this</Subtitle>
      <KillFeed>
        <R6Name bg={'#FF3131'}>{new RandExp('^[Il]{10,16}$').gen()}</R6Name>
        <GunIcon src="https://static.wikia.nocookie.net/rainbowsix/images/d/d1/R4C_HUD_Icon_R6S.png"></GunIcon>
      </KillFeed>
    </Container>
  )
}

export default App
