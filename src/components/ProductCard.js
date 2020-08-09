import React from 'react';
import { Card, Button, Modal, Container,Col,Row,Form } from 'react-bootstrap';
import { FaShoppingCart,  } from 'react-icons/fa';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

class ProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, 
            size: ''
        }
    }

    /*
        When the user adds a product to their cart, an object is created containing all the necessary 
        information. Then an action is fired to pass the info into the products array inside the reducer.
    */
    addToCart = (product) => {
        let item = {};
        item.name = product.name;
        item.price = product.price;
        item.picture = product.picture;
        item.quantity = 1;
        item.size = this.state.size;
        this.props.addToCart(item);
        this.handleClose();
    }

    handleShow = () => {
        this.setState({showModal:true})
    }

    handleClose = () => {
        this.setState({showModal:false,size: ''})
    }
    /*
        When there is a size change, i use the event object to set the new size selected inside the state
    */
    handleInputChange = (event) => {
        this.setState({
            size: event.target.value
        });
    } 
    /*
        This function renders the sizes of each product inside option divs for the user to select them.
    */
    _renderSizes = (product) => {
        if (product.sizes.length > 0) {
            return product.sizes.map((size) => {
                return <option value={size}>{size}</option>
            })
        }
    }
    /* 
        A modal for each product that contains the necessary details
    */
    _renderModal = (product) => {
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
                            <Col md={6}>
                                <img className="img-fluid" src={require(`../assets/${product.picture}`)} />
                            </Col>
                            <Col md={6}>
                                
                                <h5 className="pt-2">Description</h5>
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

export default connect(null, {addToCart})(ProductCard);