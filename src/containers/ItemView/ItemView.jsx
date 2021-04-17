import React, { Component } from "react";
import styles from "./ItemView.module.scss";

export class ItemView extends Component {
  render() {
    const { name, make, price, condition, image, imageUrl } = this.props;
    console.log("PARAMS", name, make, price, condition, image, imageUrl);
    return (
      <>
        <div className={styles.container}>
          <p>Back</p>
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
            <p className={styles.boldText}>{name}</p>
            <p className={styles.price}>Price: £{price}</p>
            <p>Brand: {make}</p>
            <p>Condition: {condition}</p>
          </div>
        </div>
        {/* CLICKING ON RESERVE REDIRECTS TO FORM */}
        <h3>Reserve</h3>
      </>
    );
  }
}

export default ItemView;
