import { Router } from "@reach/router";
import React, { Component } from "react";
import ItemListings from "../ItemListings/ItemListings";
import ItemView from "../ItemView/ItemView";
import CreateView from "../../containers/CreateView/CreateView";
import CreateComplete from "../../containers/CreateComplete/CreateComplete";
import CreateFormPage from "../../containers/CreateFormPage/CreateFormPage";
import Home from "../../containers/Home";
import Create from "../../containers/Create";
import Donate from "../DonatePage/Donate";
import DonateComplete from "../DonateComplete/DonateComplete";
import ReserveForm from "../ReserveFormPage/ReserveFormPage";
import ReserveComplete from "../ReserveComplete/ReserveComplete";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Home default />
        <ItemListings path="/listings" />
        <ItemView path="/itemView/:name/:make/:price/:condition/:imageUrl" />
        <CreateView path="/createview/:name/:make/:condition/:discription/:type/:imageUrl" />
        <Donate path="/donate" />
        <DonateComplete path="/donatecomplete" />
        <ReserveForm path="/reserveform" />
        <ReserveComplete path="/reservecomplete" />
        <Create path="/create" />
        <CreateComplete path="/createcomplete" />
        <CreateFormPage path="/createform" />
      </Router>
    );
  }
}

export default Routes;
