import React from 'react';
import { Card, Button } from 'react-bootstrap';

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
                        <h4 className="float-left">{product.name}</h4> 
                        <p className="float-right">{product.price}</p>
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