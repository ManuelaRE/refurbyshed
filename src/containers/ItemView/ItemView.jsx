import React, { Component } from "react";
import styles from "./ItemView.module.scss";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import arrow from "../../assets/Icons/backArrow.png";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export class ItemView extends Component {
  render() {
    const { name, make, price, condition, imageUrl } = this.props;
    const decodedUri = decodeURIComponent(imageUrl);
    return (
      <>
        <div className={styles.container}>
          <Link to="/listings">
            <Image src={arrow} height="50" />
          </Link>
          <div className={styles.imgContainer}>
            <img width="150" height="150" alt="my one" src={decodedUri} />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.boldText}>{name}</p>
            <p className={styles.price}>Price: £{price}</p>
            <p>Brand: {make}</p>
            <p>Condition: {condition}</p>
          </div>
        </div>
        <div className={styles.button}>
          <SubmitButton
            onClick={() => console.log("HEY")}
            name="Reserve"
            className={styles.submit}
          />
        </div>
      </>
    );
  }
}

export default ItemView;
