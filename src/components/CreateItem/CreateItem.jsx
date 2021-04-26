import React, { Component } from "react";
import styles from "./CreateItem.module.scss";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export class CreateItem extends Component {
  render() {
    const { name, make, condition, description, type, imageUrl } = this.props;

    return (
      <Container className={styles.container}>
        <div className={styles.imgContainer}>
          <img width="100" height="100" alt="my one" src={imageUrl} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.namePrice}>
            <p>{name}</p>
          </div>
          <p>by {make}</p>
          <p>{condition}</p>
          <Link
            to={`/createview/${name}/${make}/${condition}/${description}/${type}/${encodeURIComponent(
              imageUrl
            )}`}
            className={styles.links}
          >
            <Button variant="outline-primary">More info</Button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default CreateItem;
