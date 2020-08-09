import React from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { deleteProduct, changeQuantity } from '../actions/cartActions';

class CartModal extends React.Component {
  

    deleteProduct = (i) => {
        this.props.deleteProduct(i);
        
    }
    handleQuantityChange = (i, newQuantity) => {
        this.props.changeQuantity(i, newQuantity);
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
                                this.props.products.map((product,i) => {
                                    return (
                                        <>
                                            <Row>
                                                <Col xs={4} md={3}>
                                                    <img height="120" width="120" className="img-fluid" src={require(`../assets/${product.picture}`)} />
                                                </Col>
                                                <Col className="my-auto" xs={4} md={6}>
                                                    <h5 className="font-weight-bold">€{product.price.toFixed(2)}</h5>
                                                    <p>{product.name}</p>
                                                    <p>Size: {product.size}</p>
                                                    
                                                    <div className="quantity-selectors">
                                                        <Button onClick={()=> this.props.handleQuantityChange(i, -1)}>
                                                            -
                                                        </Button>
                                                        {product.quantity}
                                                        <Button onClick={()=> this.props.handleQuantityChange(i, 1)}>
                                                            +
                                                        </Button>
                                                    </div>
                                                </Col>
                                                <Col className="text-center" xs={4} md={3}>
                                                    <Button  onClick={() => this.deleteProduct(i)} className="bg-transparent no-border">
                                                        <TiDeleteOutline color="grey" size={25} />
                                                    </Button>
                                                </Col>
                                   
                                            </Row>
                                            <div className="product-divider" />
                                        </>
                                    )
                                })
                                : 
                                <Row>
                                    <div className="mx-auto text-center">
                                        <MdRemoveShoppingCart color="grey" className="mb-3" size={30}/>
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

export default connect(null, {deleteProduct, changeQuantity})(CartModal);
