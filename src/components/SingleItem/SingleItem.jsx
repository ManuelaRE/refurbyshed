import React, { Component } from "react";
import styles from "./SingleItem.module.scss";
import { Link } from "@reach/router";

export class SingleItem extends Component {
  render() {
    const { name, make, price, condition, imageUrl } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img width="100" height="100" alt="my one" src={imageUrl} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.namePrice}>
            <p>{name}</p>
            <p className={styles.price}>£{price}</p>
          </div>

          <p>by {make}</p>
          <p>{condition}</p>
          <Link
            to={`/itemView/${name}/${make}/${price}/${condition}/${encodeURIComponent(
              imageUrl
            )}`}
            className={styles.links}
          >
            <p>More info</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default SingleItem;
