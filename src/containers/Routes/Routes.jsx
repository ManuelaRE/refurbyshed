import { Router } from "@reach/router";
import React, { Component } from "react";
import ItemListings from "../ItemListings/ItemListings";
import ItemView from "../ItemView/ItemView";

class Routes extends Component {
  render() {
    return (
      <Router>
        <ItemListings default />
        <ItemView path="/itemView/:name/:make/:price/:condition/" />
      </Router>
    );
  }
}

export default Routes;

// :price/:condition/:imageUrl
