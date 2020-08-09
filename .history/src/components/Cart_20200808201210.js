import React from 'react';
import { connect } from 'react-redux';
import {FaShoppingCart } from "react-icons/fa";
import { Badge, Button} from 'react-bootstrap';
import CartModal from './CartModal';
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

    handleShow = () => {
        this.setState({showModal: true})
    }

  
    render() {
        return (
            <>
                <Button onClick={this.handleShow} className="bg-transparent no-border">
                    <FaShoppingCart size={25} color="white" />
                    <Badge pill variant="danger">{this.props.products.length}</Badge>
                </Button>
                <CartModal showModal={this.state.showModal} handleClose={this.handleClose} />
            </>
        )
    }
}

const mapStateToProps = reducer => {
    return {
        products: reducer.products
    }
}
export default connect(mapStateToProps, null)(Cart);