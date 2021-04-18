import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styles from "./StickyNavbar.module.scss";

const StickyNavbar = () => {
  return (
        <Navbar expand="lg" variant="light" bg="light" className={styles.navContainer}>
          <Container>
            <Nav className={styles.nav}>
                <Nav.Link className={styles.link} href="/">
                  Home
                </Nav.Link>
                <Nav.Link className={styles.link} href="/listings">
                  Listings
                </Nav.Link>
                <Nav.Link className={styles.link} href="/donate">
                  Donate
                </Nav.Link>
                <Nav.Link className={styles.link} href="/create">
                  Repair
                </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  );
};

export default StickyNavbar;
