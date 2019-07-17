import React from "react";
import {Container, Navbar} from "react-bootstrap";
import TrendingCategories from "../../components/TrendingCategories";
import TrendingTalkingPoints from "../../components/TrendingTalkingPoints";
import ForceNetwork from "../../components/ForceNetwork";
import InteractiveMap from "../../components/InteractiveMap";
import ScrollGraph from "../../components/ScrollGraph";
import RecommendProspects from "../../components/RecommendProspects";

import {useParseJson} from "../../utils";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {

  const dataFromJson = useParseJson();
  console.log(dataFromJson)

  return (
    <Container>
      <Navbar bg="light">
        <Navbar.Brand href="#home">GrowFlare</Navbar.Brand>
      </Navbar>
      <h2 className="header">GrowFlare insights for {dataFromJson.domain}</h2>
      <TrendingCategories categories={dataFromJson.categories} />
      <TrendingTalkingPoints keywords={dataFromJson.keywords} />
      <ForceNetwork />
      <div style={{display: 'flex'}}>
        <InteractiveMap />
        <ScrollGraph />
      </div>
      <RecommendProspects />
    </Container>
  );
};

export default App;
