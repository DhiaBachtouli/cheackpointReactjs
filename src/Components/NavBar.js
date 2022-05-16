import React from 'react';
import { Navbar ,Container , Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar () {
    return ( 
    <nav>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">FirstApp</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Profil</Nav.Link>
      <Nav.Link href="#pricing">Contact us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </nav>

    
     );
}

export default NavBar ;