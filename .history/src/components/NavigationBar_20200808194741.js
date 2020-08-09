import React from 'react';
import { Navbar,Nav, Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.png'
import style from '../style.css';
import Cart from './Cart';
const NavigationBar = () => {
  return (
      <div className="cover-image">
        <Navbar className={"navbar-background"} expand="lg">
        <Navbar.Brand className="mx-auto" href="#home">
          <img src={logo} height={100} width={100} />
        </Navbar.Brand>
          <Nav>
              <Cart />
            
        </Nav>
      </Navbar>
      <Container>
        <Row>
        <div className="cover-tag mx-auto mt-4"> 
            <h1>SALE MODE: ON</h1>
            <p>Before they're gone!</p>
        </div>
        </Row>
      </Container>
      
      </div>
    )
}

export default NavigationBar;
