import React, { Component } from "react";
import styles from "./SingleItem.module.scss";

export class SearchBar extends Component {
  render() {
    const { name, make, price, condition, imageUrl } = this.props;

    const handleItem = () => {};

    return (
      <div className={styles.container} onClick={handleItem}>
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
        </div>
      </div>
    );
  }
}

export default SearchBar;
