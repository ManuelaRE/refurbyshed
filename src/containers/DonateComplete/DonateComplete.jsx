import React from "react";
import styles from "./DonateComplete.module.scss";
import Image from 'react-bootstrap/Image';
import logo from '../../assets/logo.png'

const DonateComplete = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} >Thank you for your donation</h2>
      <Image rounded src={logo} height="250"/>
      <p>You will recieve an email within the next 24 hours from one of our friendly team members to arrange the collection of your donation!</p>
    </section>
  );
};

export default DonateComplete;
