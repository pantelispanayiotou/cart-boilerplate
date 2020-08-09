import React from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Container } from 'react-bootstrap';
import { MdRemoveShoppingCart } from 'react-icons/md';

class CartModal extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <Modal size="lg" show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header className="add-modal" closeButton>
                        <div className="product-description ml-4">
                            <h5>My Cart</h5>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                    <Container fluid>
                        
                        {
                            this.props.products.length > 0 ?
                                this.props.products.map((product) => {
                            
                                    return (
                                        <>
                                            <Row>
                                                <Col xs={4} md={3}>
                                                    <img height="120" width="120" className="img-fluid" src={require(`../assets/${product.picture}`)} />
                                                </Col>
                                                <Col xs={4} md={6}>
                                                    <h5>{product.name}</h5>
                                                </Col>
                                                <Col xs={4} md={3}>

                                                </Col>
                                   
                                            </Row>
                                            <div className="product-divider" />
                                        </>
                                    )
                                })
                                : 
                                <Row>
                                    <div className="mx-auto">
                                        <MdRemoveShoppingCart size={30}/>
                                        <h6 className="text-muted"> Your cart is currently empty </h6>
                                    </div>
                                   
                                    
                                </Row>
                                }
                        </Container> 
                    </Modal.Body>
                    <Modal.Footer className="no-border">
                        {/* <Button disabled={this.state.size === ''} className="btn-custom" onClick={() => this.addToCart(product)}>
                            ADD
          </Button> */}
                    </Modal.Footer>
                </Modal>
           
        )
   
    }
}

export default connect(null, null)(CartModal);
