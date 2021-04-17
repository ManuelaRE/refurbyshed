import React from "react";
import styles from "./CreateFormPage.module.scss";
import CreateForm from "../../components/CreateForm/index.js";
import { Link } from "@reach/router";
import Image from "react-bootstrap/Image";
import arrow from "../../assets/Icons/backArrow.png";

const CreateFormPage = () => {
  return (
    <section className={styles.container}>
      <Link to="/listings">
        <Image src={arrow} height="50" />
      </Link>
      <h2 className={styles.title}>You're nearly there...</h2>
      <br />
      <h3 className={styles.title}>
        We will contact you to schedule the workshop!
      </h3>
      <CreateForm />
    </section>
  );
};

export default CreateFormPage;
