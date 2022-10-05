/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Navs.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../imgs/logo.png";

const Navs = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} title="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About us</Nav.Link>
              <Nav.Link href="#link">Explore food</Nav.Link>
              <Nav.Link href="#link">Review</Nav.Link>
              <Nav.Link href="#link">faq </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link id="lastNav">5246822</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
