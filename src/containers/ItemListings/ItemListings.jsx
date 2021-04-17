import React, { Component } from "react";
import database from "firebase/database";
import firebase from "firebase";
import config from "../../config";
import SingleItem from "../../components/SingleItem/SingleItem";

export class ItemListings extends Component {
  state = {
    itemList: [],
  };

  componentDidMount = async () => {
    firebase.initializeApp(config);
    const itemRef = firebase.database().ref("Listings");

    itemRef.on("value", (snapshot) => {
      const items = snapshot.val();
      const itemList = [];
      for (let id in items) {
        itemList.push(items[id]);
      }
      this.setState({ itemList: itemList });
    });
  };

  render() {
    return (
      <div>
        <h1>Search bar</h1>
        {this.state.itemList.map((item) => {
          return (
            <SingleItem
              name={item.name}
              make={item.make}
              condition={item.condition}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </div>
    );
  }
}

export default ItemListings;
