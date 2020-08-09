import React from 'react';
import { Card, Button, Modal, Container,Col,Row } from 'react-bootstrap';
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
        <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header className="add-modal" closeButton>
            <div class="product-description ml-4">
                <h5>{product.name}</h5>
            </div>
        </Modal.Header>
                <Modal.Body>
                    <Container fluid>
                        <Row>
                            <Col xs={5} md={6}>
                                <img className="img-fluid" src={require(`../assets/${product.picture}`)} />
                            </Col>
                            <Col xs={7} md={6}>
                                <div class="product-description">
                                <h5>Description</h5>
                                <p>{product.description}</p>
                                <h5>Price</h5>
                                <p>{product.price.toFixed(2)}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
        <Modal.Footer>
          <Button className="btn-custom" onClick={this.handleClose}>
           ADD
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