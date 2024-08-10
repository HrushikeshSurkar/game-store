import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { links } from "../../../../constants/gameConstants";
import "./Navbar.scss";

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Navbar.Brand href="/">Game Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {links.map((link, index) => (
            <LinkContainer key={index} to={link.path}>
              <Nav.Link>{link.label}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
