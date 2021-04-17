import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styles from "./StickyNavbar.module.scss";

const StickyNavbar = () => {
  return (
    <div className={styles.navContainer}>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Nav>
              <p className={styles.nav}>
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
                  Create
                </Nav.Link>
              </p>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default StickyNavbar;
