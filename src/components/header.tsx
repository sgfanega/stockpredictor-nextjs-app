"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">Stock Predictor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-main"/>
        <Navbar.Collapse id="navbar-main">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="navbar-main">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}