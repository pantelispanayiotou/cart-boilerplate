import React from 'react';
import { Card, Button } from 'react-bootstrap';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product } = this.props;
        return (
            <Card>
                <Card.Img variant="top" src={require(`../assets/${product.picture}`)} />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;