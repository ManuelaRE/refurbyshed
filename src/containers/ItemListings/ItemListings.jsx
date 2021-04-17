import React, { Component } from "react";
import firebase from "firebase";
import config from "../../config";
import SingleItem from "../../components/SingleItem/SingleItem";

export class ItemListings extends Component {
  state = {
    itemList: [],
  };

  componentDidMount = async () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }

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
        {this.state.itemList.map((item, index) => {
          return (
            <SingleItem
              key={index}
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
