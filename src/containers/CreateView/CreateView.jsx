import React, { Component } from "react";
import styles from "./CreateView.module.scss";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import arrow from "../../assets/Icons/backArrow.png";
import SubmitButton from "../../components/SubmitButton/SubmitButton";

export class CreateView extends Component {
  render() {
    const { name, make, condition, discription, type, imageUrl } = this.props;
    const decodedUri = decodeURIComponent(imageUrl);

    return (
      <>
        <div className={styles.container}>
          <Link to="/listings">
            <Image src={arrow} height="50" />
          </Link>
          <p>Take part in our worshop to help up refurbish this {type}</p>
          <div className={styles.imgContainer}>
            <img width="150" height="150" alt="my one" src={decodedUri} />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.boldText}>Name: {name ?? type}</p>
            <p>Brand: {make ?? "Unknown"}</p>
            <p>Condition: {condition ?? "Unknown"}</p>
            <p>Discription: {discription ?? "Needs repair"}</p>
          </div>
        </div>
        <div className={styles.button}>
          <Link to="/createform">
            <SubmitButton
              onClick={() => console.log("HEY")}
              name="Repair"
              className={styles.submit}
            />
          </Link>
        </div>
      </>
    );
  }
}

export default CreateView;
