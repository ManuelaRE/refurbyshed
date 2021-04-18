import React, { Component } from "react";
import firebase from "firebase";
import config from "../../config";
import SingleItem from "../../components/SingleItem/SingleItem";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import styles from "./ItemListings.module.scss";

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
      <Container fluid className={styles.container}>
        <Card className={styles.card}>
          <Card.Title className={styles.cardTitle}>Listings</Card.Title>
          <Card.Body>
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
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default ItemListings;
