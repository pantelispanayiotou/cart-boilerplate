import React from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Container } from 'react-bootstrap';

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
                        
                        {this.props.products.map((product) => {
                            
                            return (
                            
                            <Row>
                                <Col xs={4} md={3}>
                                    <img height="100" width="100" className="img-fluid" src={require(`../assets/${product.picture}`)} />
                                </Col>
                                <Col xs={4} md={6}>
                                        <p>{product.name}</p>
                                </Col>
                                <Col xs={4} md={3}>

                                    </Col>
                                    <div className="product-divider" />
                                </Row>
                            
                            )
                        }
                        )}
                            
                        </Container> 
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button disabled={this.state.size === ''} className="btn-custom" onClick={() => this.addToCart(product)}>
                            ADD
          </Button> */}
                    </Modal.Footer>
                </Modal>
           
        )
   
    }
}

export default connect(null, null)(CartModal);
