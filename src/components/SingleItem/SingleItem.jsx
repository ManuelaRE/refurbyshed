import React, { Component } from "react";
import styles from "./SingleItem.module.scss";
import { Link } from "@reach/router";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button"


export class SingleItem extends Component {
  render() {
    const { name, make, price, condition, imageUrl } = this.props;
    return (
      <Container className={styles.container}>
        <div className={styles.imgContainer}>
          <img width="100" height="100" alt="my one" src={imageUrl} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.namePrice}>
            <p>{name}</p>
            <p>£{price}</p>
          </div>

          <p>by {make}</p>
          <p>{condition}</p>
          <Link
            to={`/itemView/${name}/${make}/${price}/${condition}`}
            className={styles.links}
          >
            <Button variant="outline-primary">More info</Button>
          </Link>
        </div>
      </Container>
    );
  }
}

export default SingleItem;
