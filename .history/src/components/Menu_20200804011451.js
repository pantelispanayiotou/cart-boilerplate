import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'
import style from '../style.css';
import { FaBars } from "react-icons/fa";

const Menu = () => {
    return (
        <Navbar className={"navbar-background"} expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} height={100} width={100} />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars color="white" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home"><h6 className="navbar-link">Products</h6></Nav.Link>
            <Nav.Link href="#home"><h6 className="navbar-link">Cart</h6></Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
    )
}

export default Menu;
