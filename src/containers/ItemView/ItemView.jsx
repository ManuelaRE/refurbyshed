import React, { Component } from "react";
import styles from "./ItemView.module.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "@reach/router";

export class ItemView extends Component {
  render() {
    const { name, make, price, condition, imageUrl } = this.props;
    const decodedUri = decodeURIComponent(imageUrl);
    return (
      <Container className={styles.container}>
        <Card className={styles.card}>
          <Card.Title className={styles.cardTitle}>{name}</Card.Title>
          <div className={styles.imgContainer}>
            <img width="150" height="150" alt="my one" src={decodedUri} />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.price}>Price: £{price}</p>
            <p>Brand: {make}</p>
            <p>Condition: {condition}</p>
          </div>
        </Card>
        <Link to="/reserveform">
          <Button className={styles.button} variant="outline-primary">
            Reserve
          </Button>
        </Link>
        <Link to="/listings">
          <Button variant="outline-primary">Back</Button>
        </Link>
      </Container>
    );
  }
}

export default ItemView;
