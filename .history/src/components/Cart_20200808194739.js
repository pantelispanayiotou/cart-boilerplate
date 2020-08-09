import React from 'react';
import { connect } from 'react-redux';
import {FaShoppingCart } from "react-icons/fa";
import { Badge, Nav,Modal, Col  } from 'react-bootstrap';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }
    handleClose = () => {
        this.setState({showModal: false})
    }

    _renderCartModal = () => {
        return (
            <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
        <Modal.Header className="add-modal" closeButton>
            <div className="product-description ml-4">
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
                                
                                <h5>Description</h5>
                                <p className="text-secondary">{product.description}</p>
                                <h5>Price</h5>
                                <p className="text-secondary">{`€${product.price.toFixed(2)}`}</p>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                <h5>Select Size</h5>
                                    <Form.Control onChange={this.handleInputChange} value={this.state.size} as="select">
                                        <option value="">Choose...</option>
                                        {this._renderSizes(product)}  
                                    </Form.Control>
                                </Form.Group>
                       
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
        <Modal.Footer>
          <Button disabled={this.state.size === ''} className="btn-custom" onClick={()=>this.addToCart(product)}>
           ADD
          </Button>
        </Modal.Footer>
            </Modal>
        )
    }
    render() {
        return (
            <>
                <Nav.Link>
                    <FaShoppingCart size={25} color="white" />
                    <Badge pill variant="danger">{this.props.products.length}</Badge>
                </Nav.Link>
                {this._renderCartModal()}
            </>
        )
    }
}

const mapStateToProps = reducer => {
    return {
        orderTotal: reducer.orderTotal, 
        products: reducer.products
    }
}
export default connect(mapStateToProps, null)(Cart);