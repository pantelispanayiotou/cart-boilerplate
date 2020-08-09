import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleShow = () => {
        this.setState({showModal:true})
    }

    handleClose = () => {
        this.setState({showModal:false})
    }
    _renderModal = (product) => {
        return (
        <Modal show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
            </Modal>
        )
    }

    render() {
        const { product } = this.props;
        return (
            <>
            <Card className="card-box-shadow">
                <Card.Img variant="top" src={require(`../assets/${product.picture}`)} />
                    <Card.Body>
                    <Card.Title>
                            <p className="p-0">{product.name} </p>
                            <p className="p-0">{`€${product.price.toFixed(2)}`}</p>
                         
                    </Card.Title>
                    <Button onClick={this.handleShow} className="btn-custom p-2" >
                    <FaShoppingCart size={20} color="white" /> ADD TO BAG
                    </Button>
                </Card.Body>
                </Card>
            {this._renderModal(product)}
        </>
        )
    }
}

export default ProductCard;