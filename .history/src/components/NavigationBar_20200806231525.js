import React from 'react';
import { Navbar,Nav, Badge, Container, Col, Row } from 'react-bootstrap';
import logo from '../assets/logo.png'
import style from '../style.css';
import { FaBars,FaShoppingCart } from "react-icons/fa";

const Menu = () => {
  return (
      <div className="cover-image">
        <Navbar className={"navbar-background"} expand="lg">
        <Navbar.Brand className="mx-auto" href="#home">
          <img src={logo} height={100} width={100} />
        </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">
              <FaShoppingCart size={25} color="white" />
              <Badge pill variant="danger">4</Badge>
            </Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Row>
        <div className="cover-tag "> 
          <h1>SALE MODE: ON</h1>
        </div>
        </Row>
      </Container>
      
      </div>
    )
}

export default Menu;
