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
                <CartModal
                    orderTotal={this.props.orderTotal}
                    products={this.props.products}
                    showModal={this.state.showModal}
                    handleClose={this.handleClose} />
            </>
        )
    }
}

/*
    Fetching the values needed from the reducer and matching them to the
    corresponding props. Those props are sent to the CartModal Component.
*/
const mapStateToProps = reducer => {
    return {
        products: reducer.products, 
        orderTotal: reducer.orderTotal
    }
}
export default connect(mapStateToProps, null)(Cart);