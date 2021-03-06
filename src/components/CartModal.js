import React from 'react';
import { connect } from 'react-redux';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap';
import { MdRemoveShoppingCart,MdRemove } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { RiAddLine } from 'react-icons/ri';
import { deleteProduct, changeQuantity, clearCart } from '../actions/cartActions';

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
                                            <Row key={product.name.toString()}>
                                                <Col xs={4} md={3}>
                                                    <img alt="sportswear" height="120" width="120" className="img-fluid" src={require(`../assets/${product.picture}`)} />
                                                </Col>
                                                <Col className="my-auto" xs={4} md={6}>
                                                    <h5 className="font-weight-bold">€{product.price.toFixed(2)}</h5>
                                                    <p className="m-0">{product.name}</p>
                                                    <p>Size: {product.size}</p>
                                                    <div className="quantity-selectors">
                                                        <Button className="p-1 btn-custom mr-2" disabled={product.quantity === 1} onClick={()=> this.handleQuantityChange(i, -1)}>
                                                            <MdRemove size={20} />
                                                        </Button>
                                                        {product.quantity}
                                                        <Button className="p-1 btn-custom ml-2" onClick={()=> this.handleQuantityChange(i, 1)}>
                                                           <RiAddLine size={20} />
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
                        {this.props.products.length > 0 ?
                            <div className="order-total float-right">
                                <p><span className="font-weight-bold">Order Total:</span> €{this.props.orderTotal.toFixed(2)}</p>
                            </div> : null}
                        </Container> 
                    </Modal.Body>
                <Modal.Footer className="no-border">
                    {this.props.products.length > 0 ?
                     <div className="checkout-buttons">
                    <Button onClick={this.props.clearCart} variant="danger">
                        CLEAR CART
                    </Button>
                    <Button onClick={this.props.handleClose} className="btn-custom ml-2">
                        CHECKOUT       
                    </Button>
                     </div>
                : null}

                    </Modal.Footer>
                </Modal>
           
        )
   
    }
}

export default connect(null, {deleteProduct, changeQuantity, clearCart})(CartModal);
