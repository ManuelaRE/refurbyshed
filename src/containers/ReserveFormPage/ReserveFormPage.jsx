import React from "react";
import styles from "./ReserveFormPage.module.scss";
import ReserveForm from '../../components/ReserveForm/index.js';
import Image from 'react-bootstrap/Image';
import nameImg from '../../assets/Icons/name.png';

const ReserveFormPage = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title} >You're nearly there...</h2>
      <br/>
      <h3 className={styles.title} >We just need a few details</h3>
      <ReserveForm/>
    </section>
  );
};

export default ReserveFormPage;
