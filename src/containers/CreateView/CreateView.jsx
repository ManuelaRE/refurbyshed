import { Link } from "@reach/router";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import styles from "./CreateView.module.scss";
export class CreateView extends Component {
  render() {
    const { name, make, condition, description, type, imageUrl } = this.props;
    const decodedUri = decodeURIComponent(imageUrl);

    return (
      <>
        <Container className={styles.container}>
          <Card className={styles.card}>
            <p>Take part in our worshop to help up refurbish this {type}</p>
            <div className={styles.imgContainer}>
              <img width="150" height="150" alt="my one" src={decodedUri} />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.boldText}>Name: {name ?? type}</p>
              <p>Brand: {make ?? "Unknown"}</p>
              <p>Condition: {condition ?? "Unknown"}</p>
              <p>Description: {description ?? "Needs repair"}</p>
            </div>
          </Card>
          <Link to="/createform">
            <Button className={styles.button} variant="outline-primary">
              Book
            </Button>
          </Link>
          <Link to="/create">
            <Button variant="outline-primary">Back</Button>
          </Link>
        </Container>
      </>
    );
  }
}

export default CreateView;
