import React from "react";
import styles from "./ReserveComplete.module.scss";
import Image from 'react-bootstrap/Image';
import complete from '../../assets/Icons/complete.svg';

const ReserveComplete = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} >Thank you for your reservation </h2>
      <Image rounded src={complete} height="250"/>
      <p>You will recieve an email within the next 24 hours from one of our friendly team members regarding</p>
    </section>
  );
};

export default ReserveComplete;
