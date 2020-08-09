import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import _ from 'lodash';
var catalogData = require('../catalog.json');

class Catalog extends React.Component {

    constructor() {
        super();
        this.state = {
            products: ''
        }
    }
    loadCatalog = () => {
        this.setState({ products: catalogData.products});
    }

    componentDidMount() {
        this.loadCatalog();
        
    }

    render() {
        //breaking the products array in chunks of 3 to create a 3-column layout
        const chunks = _.chunk(this.state.products, 3);
        console.log("chunks", chunks);
        return (
            <Container>
          
                {/* {chunks && chunks.map((item, i) => 
                {
                    return <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require(`../assets/${item.picture}`)} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    })} */}
           
            </Container>
        )
    }
}

export default Catalog;