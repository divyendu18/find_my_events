import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class AppNavbar extends Component {
  render() {
    return (
      <div className="n1 sticky">
        <Navbar expand="lg" className="sticky-top">
          <Link to="/">
            <Navbar.Brand href="">
              <div id="cool1">
                <span id="design">F</span>indMyEvents
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/add" id="cool">
                <i class="fas fa-plus-circle" />
                Events
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default AppNavbar;
