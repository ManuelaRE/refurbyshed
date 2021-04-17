import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import arrow from "../../img/arrow-down.png";
import logo from "../../img/HatchfulExport-All/logo_transparent.png"
import styles from "./LandingPage.module.scss";


const LandingPage = () => {
  return (
    <Container fluid className={styles.container}>
      <Row >
        <Image className={styles.image} src={logo} fluid/>
      </Row>
      <Row>
      <Card className={styles.card}>
        <Card.Body className={styles.cardBody}>We bring old furniture back to life while supporting mental health through our art workshops</Card.Body>
      </Card>
      </Row>
      <Row>
      <Image src={arrow} className={styles.arrow} fluid/>
      </Row>
    </Container>
  )
}

export default LandingPage
