import React, { Component } from "react";
import styles from "./ItemView.module.scss";
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'


export class ItemView extends Component {
  render() {
    const { name, make, price, condition, image, imageUrl } = this.props;
    console.log("PARAMS", name, make, price, condition, image, imageUrl);
    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Card.Title className={styles.cardTitle}>{name}</Card.Title>
          <div className={styles.imgContainer}>
            <img
              width="150"
              height="150"
              alt="my one"
              src={
                "https://www.easyequipment.com/media/catalog/product/cache/1/thumbnail/330x/9df78eab33525d08d6e5fb8d27136e95/G/H/GH560_Bolero_1.jpg"
              }
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.price}>Price: £{price}</p>
            <p>Brand: {make}</p>
            <p>Condition: {condition}</p>
          </div>
        </Card>
        {/* CLICKING ON RESERVE REDIRECTS TO FORM */}
        <Button className={styles.button} variant="outline-primary">Reserve</Button>
        <Button variant="outline-primary">Back</Button>
      </Container>
    );
  }
}

export default ItemView;
