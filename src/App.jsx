import styled from "styled-components";
import RandExp from "randexp";
import GlobalFonts from "./fonts/fonts";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import React, { useState } from "react";
import AdSense from "react-adsense";

function App() {
  const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  `;

  //Title
  const ReactBootstrapH1 = ({ className, children }) => {
    return <h1 className={className}>{children}</h1>;
  };

  const Title = styled(ReactBootstrapH1)`
    font-size: 3rem;
    font-weight: bold;
  `;

  //Subtitle
  const ReactBootstrapH4 = ({ className, children }) => {
    return <h4 className={className}>{children}</h4>;
  };

  const Subtitle = styled(ReactBootstrapH4)`
    font-weight: 500;
  `;

  //R6 Name
  const R6Name = styled(ReactBootstrapH4)`
    font-family: "Scout Condensed";
    font-weight: bold;
    font-size: 2rem;
    color: white;
    padding: 0 0.6rem;
    margin: 0;
    background-color: ${(props) =>
      props.bg == "blue"
        ? "#1387E1"
        : props.bg == "red"
        ? "#FF3131"
        : props.bg == "orange"
        ? "#FF932E"
        : "#242424"};
    -webkit-text-stroke: ${(props) => (props.legacy ? "0.6px black" : 0)};
  `;

  //gun icon
  const gunImage = ({ src, className, children }) => {
    return (
      <img src={src} className={className}>
        {children}
      </img>
    );
  };
  const GunIcon = styled(gunImage)`
    height: 2.4rem;
    background-color: white;
    filter: invert();
  `;

  //KillFeed
  const KillFeed = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: auto;
    user-select: none;
  `;

  //legacy text style state
  const [isLegacy, setLegacy] = useState(false);

  function handleSwitch() {
    setLegacy(!isLegacy);
  }

  //username state
  const [username, setUsername] = useState("Your Username Here");

  //loader state

  const [isLoading, setLoading] = useState(false);

  function updateUsername() {
    //StatsDB check

    let userId = import.meta.env.STARSDB_USERID;
    let password = import.meta.env.STARSDB_PASSWORD;
    let usernameToSearch = new RandExp("^[Il]{10,16}$").gen();
    console.log("username to search: " + usernameToSearch);

    let token = btoa(userId + ":" + password);

    //Loader state set to true
    setLoading(true);
    fetch("https://staging-api.statsdb.net/r6/namecheck/" + usernameToSearch, {
      credentials: "omit",
      headers: {
        Authorization: "Basic " + token
      }
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        //Loader state set to false
        setLoading(false);
        if (data.payload.exists) console.log("Username is taken!");
        else {
          console.log("Username is available!");
          setUsername(usernameToSearch);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //Random usernames
  const usernames = [
    "Pengu.g2",
    "Beaulo.TSMFTX",
    "Crif14.NT",
    "FD_ForKio",
    "Terrorist",
    "stonks.alien",
    "VG_Rahkwal",
    "MyIanaCondaDont",
    "MacAruniNoodles",
    "AshMainNoBrain",
    "LilPxssy",
    "vishy",
    "zWANZ3"
  ];

  return (
    <Container>
      <GlobalFonts />
      <Title>Barcode Name Generator</Title>
      <Subtitle>Generate bullshit barcode names like this</Subtitle>
      <KillFeed>
        <R6Name legacy={isLegacy} bg={"blue"}>
          {username}
        </R6Name>
        <GunIcon src="https://static.wikia.nocookie.net/rainbowsix/images/d/d1/R4C_HUD_Icon_R6S.png"></GunIcon>
        <R6Name legacy={isLegacy} bg={"orange"}>
          {usernames[Math.floor(Math.random() * usernames.length)]}
        </R6Name>
      </KillFeed>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Enable legacy Text"
        checked={isLegacy}
        onChange={() => handleSwitch()}
      />
      <InputGroup className="w-50">
        <FormControl
          type="text"
          value={username}
          readOnly
          disabled={username == "Your Username Here"}
          onClick={() => {
            navigator.clipboard.writeText(username);
          }}
        />
        <Button
          disabled={username == "Your Username Here"}
          variant="primary"
          onClick={() => {
            navigator.clipboard.writeText(username);
          }}
        >
          Copy
        </Button>
      </InputGroup>
      <Button variant="primary" onClick={() => updateUsername()}>
        Generate new username
      </Button>
      {isLoading && <Spinner animation="grow" variant="info" />}
      {/* ads */}
      {/* <AdSense.Google
        client='ca-pub-7292810486004926'
        slot='7806394673'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      /> */}
    </Container>
  );
}

export default App;
