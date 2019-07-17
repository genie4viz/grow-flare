import React from "react";
import {Container, Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import TrendingCategories from "../../components/TrendingCategories";
import TrendingTalkingPoints from "../../components/TrendingTalkingPoints";
import ForceNetwork from "../../components/ForceNetwork";
import InteractiveMap from "../../components/InteractiveMap";
import ScrollGraph from "../../components/ScrollGraph";
import RecommendProspects from "../../components/RecommendProspects";

import {useParseJson} from "../../utils";
import logo from "../../static/imgs/growflare_logo.png";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {

  const dataFromJson = useParseJson();  
  console.log(dataFromJson);
  return (
    <Container>
      <Navbar bg="white">
        <Navbar.Brand href="#home"><img src={logo} alt="logo" height="50"/></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 roundText" />
            <Button variant="success" className="roundButton">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <h2 className="header">GrowFlare insights for {dataFromJson.domain}</h2>
      <TrendingCategories categories={dataFromJson.categories} />
      <TrendingTalkingPoints keywords={dataFromJson.keywords} />
      <ForceNetwork />
      <div style={{display: 'flex'}}>
        <InteractiveMap />
        <ScrollGraph />
      </div>
      <RecommendProspects comps={dataFromJson.comps}/>
    </Container>
  );
};

export default App;
