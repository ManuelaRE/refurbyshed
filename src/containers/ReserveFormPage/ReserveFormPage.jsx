import React from "react";
import styles from "./ReserveFormPage.module.scss";
import ReserveForm from "../../components/ReserveForm/index.js";
import { Link } from "@reach/router";
import Image from "react-bootstrap/Image";
import arrow from "../../assets/Icons/backArrow.png";

const ReserveFormPage = () => {
  return (
    <section className={styles.container}>
      <Link to="/listings">
        <Image src={arrow} height="50" />
      </Link>
      <h2 className={styles.title}>You're nearly there...</h2>
      <br />
      <h3 className={styles.title}>We just need a few details</h3>
      <ReserveForm />
    </section>
  );
};

export default ReserveFormPage;
