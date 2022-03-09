import styled from 'styled-components';
import RandExp from 'randexp';
import GlobalFonts from './fonts/fonts';

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
    background-color: ${props => props.bg == "blue" ? '#1387E1' : props.bg == "red" ? '#FF3131' : props.bg == "orange" ? '#FF932E' : "#242424"};
    -webkit-text-stroke: ${props => props.legacy ? '0.6px black' : 0};
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
        <R6Name legacy bg={'orange'}>{new RandExp('^[Il]{10,16}$').gen()}</R6Name>
        <GunIcon src="https://static.wikia.nocookie.net/rainbowsix/images/d/d1/R4C_HUD_Icon_R6S.png"></GunIcon>
      </KillFeed>
      <input type="checkbox" />
    </Container>
  )
}

export default App
