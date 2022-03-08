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
    color: white;
    padding: 0 0.6rem;
    background-color: #1387E1;
    background-color: #FF3131;
    background-color: #FF932E;
    /* -webkit-text-stroke: 0.1px black; */
  `

  //gun icon
  const gunIcon = styled.div`
    background-color: black;
  `
  

  return (
    <Container>
      <GlobalFonts />
      <Title>Barcode Name Generator</Title>
      <Subtitle>Generate bullshit barcode names like this</Subtitle>
      <R6Name>{new RandExp('^[Il]{10,16}$').gen()}</R6Name>
    </Container>
  )
}

export default App
