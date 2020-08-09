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
                            {product.name} <br/>
                            {`€${product.price.toFixed(2)}`}
                         
                    </Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Add To Bag</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;