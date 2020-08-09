import React from 'react';
import { Card, Button, Container, Row,Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

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
                            <p className="p-0">{product.name} </p>
                            <p className="p-0">{`€${product.price.toFixed(2)}`}</p>
                         
                    </Card.Title>
                    <Button variant="primary">
                    <FaShoppingCart size={20} color="white" /> Add To Bag
                        </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ProductCard;