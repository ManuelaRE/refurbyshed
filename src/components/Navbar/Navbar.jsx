import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styles from "./Navbar.module.scss"


const StickyNavbar = () => {
  return (
    <Navbar expand="sm" className={styles.navBar}>
      <Nav className={styles.navLink}>
        <Nav.Link className={styles.navLink} href="/">Home</Nav.Link>
        <Nav.Link className={styles.navLink} href="/listings">Listings</Nav.Link>
        <Nav.Link className={styles.navLink} href="/donate">Donate</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default StickyNavbar
