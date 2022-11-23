import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import React ,{useContext}from 'react';
import { Cartcontext } from '../context/cartContext';
function Bar() {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
          <Nav className="me-auto">
         
            
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/Cart" >Cart {state.length}</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Bar;