import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from "react-bootstrap/ListGroup";
import Row from 'react-bootstrap/Row';

import styles from "./WhatWeDo.module.scss"
import imageOne from "../../img/imageOne.svg";
import imageTwo from "../../img/imageTwo.svg";
import imageThree from "../../img/imageThree.svg";



const WhatWeDo = () => {
  return (
    <Container fluid className={styles.container}>
      <Row>
        <Card className={styles.card}>
          <Card.Title className={styles.cardTitle}>Our model</Card.Title>
          <Card.Body className={styles.cardBody}>
            <ListGroup>
              <ListGroup.Item className={styles.list}>1. We collect old furniture through donations</ListGroup.Item>
              <Image className={styles.image} src={imageOne} fluid/>
              <ListGroup.Item className={styles.list}>2. We run workshops for disadvantaged groups where they can participate in reconditioning and art classes.</ListGroup.Item>
              <Image className={styles.image} src={imageTwo} fluid/>
              <ListGroup.Item className={styles.list}>3. All refurbished items are then sold through our platform. All profits go back into helping the community.</ListGroup.Item>
              <Image className={styles.image} src={imageThree} fluid/>
            </ListGroup>
          </Card.Body>
        </Card>
      </Row>

    </Container>
  )
}

export default WhatWeDo
