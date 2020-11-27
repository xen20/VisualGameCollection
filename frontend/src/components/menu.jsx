import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// className mr-auto, ml-auto etc align items left or right...

class Menu extends Component {
  render() {
    return (
      <div>
        <span>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="mr-auto" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="mr-auto" href="#link">
                  Link
                </Nav.Link>
                <NavDropdown
                  className="mr-auto"
                  title="Dropdown"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item
                    onClick={() => this.props.onDropdownclick()}
                    href="#action/3.1"
                  >
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </span>
      </div>
    );
  }
}

export default Menu;
