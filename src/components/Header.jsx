import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="bg-primary bg-opacity-25">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-photo-film text-white"></i>
            <span className="text-secondary"> Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
