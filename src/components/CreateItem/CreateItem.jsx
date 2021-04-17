import React, { Component } from "react";
import styles from "./CreateItem.module.scss";
import { Link } from "@reach/router";

export class CreateItem extends Component {
  render() {
    const { name, make, condition, discription, type, imageUrl } = this.props;
    console.log("PROPS", type);

    return (
      <div className={styles.container}>
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
            to={`/createview/${name}/${make}/${condition}/${discription}/${type}/${encodeURIComponent(
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

export default CreateItem;
