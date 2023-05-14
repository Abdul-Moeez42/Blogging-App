import React from 'react';
import "./Navigation.css";
import { Navbar, Nav, NavLink } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">For Education</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
