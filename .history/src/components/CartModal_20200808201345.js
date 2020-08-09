import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

class CartModal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(" props ", this.props);
        return (
            <Modal>
                <Modal size="lg" show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header className="add-modal" closeButton>
                        <div className="product-description ml-4">
                            <h5>My Cart</h5>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        {/* <Container fluid>
                            <Row>
                                <Col xs={5} md={6}>
                                    <img className="img-fluid" src={require(`../assets/${product.picture}`)} />
                                </Col>
                                <Col xs={7} md={6}>
                                
                                    <h5>Description</h5>
                                    <p className="text-secondary">{product.description}</p>
                                    <h5>Price</h5>
                                    <p className="text-secondary">{`€${product.price.toFixed(2)}`}</p>
                                    
                       
                                </Col>
                            </Row>
                        </Container> */}
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button disabled={this.state.size === ''} className="btn-custom" onClick={() => this.addToCart(product)}>
                            ADD
          </Button> */}
                    </Modal.Footer>
                </Modal>
            </Modal>
        )
   
    }
}
const mapStateToProps = reducer => {
    return {
        products: reducer.products, 
        orderTotal: reducer.orderTotal
    }
}
export default connect(mapStateToProps, null)(CartModal);
