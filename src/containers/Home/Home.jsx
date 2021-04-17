import React, { Component } from "react";
import LandingPage from "../../components/LandingPage";
import WhatWeDo from "../../components/WhatWeDo";
import About from "../../components/About";

export class Home extends Component {
  render() {
    return (
      <>
        <LandingPage />
        <WhatWeDo />
        <About />
      </>
    );
  }
}

export default Home;
