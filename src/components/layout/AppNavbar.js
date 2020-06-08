import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class AppNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand href="">
            <i className="fas fa-home">FindMyEvents</i>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default AppNavbar;
