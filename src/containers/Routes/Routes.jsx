import { Router } from "@reach/router";
import React, { Component } from "react";
import ItemListings from "../ItemListings/ItemListings";
import ItemView from "../ItemView/ItemView";
import Home from "../../containers/Home";
import Donate from "../DonatePage/Donate";
import DonateComplete from "../DonateComplete/DonateComplete";
import ReserveFormPage from "../ReserveFormPage/ReserveFormPage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Home default />
        <ItemListings path="/listings" />
        <ItemView path="/itemView/:name?/:make?/:price?/:condition?/" />
        <Donate path="/donate" />
        <DonateComplete path="/donatecomplete" />
        <ReserveFormPage path="/reserveform" />
      </Router>
    );
  }
}

export default Routes;

// :price/:condition/:imageUrl
