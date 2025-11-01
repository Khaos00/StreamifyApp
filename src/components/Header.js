import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          🎬 My Movie
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#facebook">Facebook</Nav.Link>
          <Nav.Link href="#twitter">Twitter</Nav.Link>
          <Nav.Link href="#instagram">Instagram</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
