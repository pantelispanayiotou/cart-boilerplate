import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
var catalogData = require('../catalog.json');
class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            catalog: ''
        }
    }
    loadCatalog = () => {
        this.setState({ catalog: catalogData});
    }

    componentDidMount() {
        this.loadCatalog();
        
    }

    render() {
        return (
            <Container>
          
                {this.state.catalog.map((item) => {
                        return <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    })}
           
            </Container>
        )
    }
}

export default Catalog;