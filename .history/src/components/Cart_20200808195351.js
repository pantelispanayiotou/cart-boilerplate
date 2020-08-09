import React from 'react';
import { connect } from 'react-redux';
import {FaShoppingCart } from "react-icons/fa";
import { Badge, Button} from 'react-bootstrap';

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

  
    render() {
        return (
            <>
                <button>
                    <FaShoppingCart size={25} color="white" />
                    <Badge pill variant="danger">{this.props.products.length}</Badge>
                </button> 
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