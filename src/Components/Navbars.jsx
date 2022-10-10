import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
   <>
     <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navbar-nav ms-auto">
            <Nav.Link activeClassName='menu_active' href="/">Home</Nav.Link>
            <Nav.Link  activeClassName='menu_active' href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link  activeClassName='menu_active' href="/contact">Contact</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Navbars