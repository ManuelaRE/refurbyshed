import React, { Component } from "react";
import firebase from "firebase";
import config from "../../config";
import CreateItem from "../../components/CreateItem/CreateItem";

export class Create extends Component {
  state = {
    itemList: [],
  };

  componentDidMount = async () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    const itemRef = firebase.database().ref("Form").child("donationForm");

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
        <h1>Furniture waiting to get refurbished:</h1>
        {this.state.itemList.map((item, index) => {
          return (
            <CreateItem
              key={index}
              name={item.itemName}
              make={item.make}
              condition={item.condition}
              imageUrl={item.image}
              type={item.type}
              discription={item.description}
            />
          );
        })}
      </div>
    );
  }
}

export default Create;
