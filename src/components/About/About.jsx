import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import styles from "./About.module.scss"
import give from "../../img/give.svg";


const About = () => {
  return (
    <Container fluid="md" className={styles.container}>
      <Card className={styles.card}>
        <Card.Title className={styles.cardTitle}>About us</Card.Title>
        <Card.Body className={styles.cardBody}>
            <Col>
              <Image src={give} className={styles.give} />
            </Col>
            <Container>
            <Col className={styles.textSection}>
              {/* <Row>
                The arts valuable role in mental health is being recognized.
              </Row>
              <Row>
                It can help to boost confidence and make us feel more engaged and resilient. Besides these benefits, art engagement also alleviates anxiety, depression and stress.
            </Row> */}
              <Row>
                <p>At Refurbished we combine our passion for arts with our love of nature by giving old furniture a second life.</p>
                <p>We are not-for-profit. All earnings go back into art supplies and expanding our locations.</p>
            </Row>
            </Col>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default About
