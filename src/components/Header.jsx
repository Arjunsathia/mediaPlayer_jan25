import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <header>
      <Navbar variant="dark" className="shadow-sm py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/">
            <i className="fa-solid fa-photo-film me-2 fa-2xl"></i>
            <span className="fw-bold text-light">Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
