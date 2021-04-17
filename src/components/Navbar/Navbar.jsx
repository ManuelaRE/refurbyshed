import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const StickyNavbar = () => {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
            <Container>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/listings">Listings</Nav.Link>
              <Nav.Link href="/donate">Donate</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
    </Container>

  )
}

export default StickyNavbar
