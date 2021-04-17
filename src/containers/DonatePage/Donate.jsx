import React from "react";
import styles from "./Donate.module.scss";
import DonateForm from '../../components/DonateForm/index.js';

const Donate = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} >Make a donation</h2>
      <DonateForm/>
    </section>
  );
};

export default Donate;
