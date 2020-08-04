import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'
import style from '../style.css';

const Menu = () => {
    return (
        <Navbar className={"navbar-background"} expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} height={100} width={100} /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={"navbar-link"} href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    )
}

export default Menu;
