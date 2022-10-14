import { width } from '@mui/system';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Viewerescollection from '../Assets/logo/ViewersCollection.png';

const Navbars = () => {
  return (
   <>
     {/* <Navbar bg="transparent"  expand="lg"  >
      <Container  >
        <Navbar.Brand to="/"><img src={Viewerescollection} className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navbar-nav ms-auto">
            <Nav.Link activeClassName='menu_active' href="/">Home</Nav.Link>
            <Nav.Link  activeClassName='menu_active' href="/services">Services</Nav.Link>
            <Nav.Link  activeClassName='menu_active' href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link  activeClassName='menu_active' href="/contact">Contact</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

<Navbar  expand="lg">
        <Container>
          <Navbar.Brand to="/"><img src={Viewerescollection} className="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
             
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
           
              
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   </>
  )
}

export default Navbars