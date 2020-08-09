import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';
import _ from 'lodash';
import ProductCard from './ProductCard';

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
        
        return (
            <Container fluid="md">
                {chunks && chunks.map((item) => (
                <Row className="mt-4">
                    { item.map((product) => {
                    return (
                        <Col className="mt-2" md={4}>
                            <ProductCard product={product} />
                            
                        </Col>
                    )})
                    }
                </Row>
                ))
                }
                
            </Container>
        )
    }
}

export default Catalog;