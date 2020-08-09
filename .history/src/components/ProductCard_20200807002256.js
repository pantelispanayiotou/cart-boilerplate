import React from 'react';
import { Card, Button, Container, Row,Col } from 'react-bootstrap';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product } = this.props;
        return (
            <Card className="card-box-shadow">
                <Card.Img variant="top" src={require(`../assets/${product.picture}`)} />
                    <Card.Body>
                    <Card.Title>
                        <Container fluid>
                            <Row>
                                <Col md={8}>
                                    {product.name}
                                </Col>
                                <Col md={4}>
                                    {`€${product.price}`}
                                </Col>
                            </Row>
                        </Container>
                    </Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;