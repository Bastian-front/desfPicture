import React from 'react';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Barra() {
  return (
    <Navbar bg="success">
        <Container>
            <Link to="/">
              <NavbarBrand style={{textAlign: "center", color: "white"}}>
                Home
              </NavbarBrand>
            </Link>
            <span style={{textAlign: "center", color: "white"}}>|</span>
            <Link to="/favoritos">
              <NavbarBrand style={{textAlign: "center", color: "white"}}>
                Favoritos
              </NavbarBrand>
            </Link>
        </Container>
    </Navbar>
  )
}

export default Barra 