import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
    render() {
        return (
            <>
                <FaShoppingCart size={25} color="white" />
                <Badge pill variant="danger">{this.props.products.length}</Badge>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderTotal: state.reducer.orderTotal, 
        products: state.reducer.products
    }
}
export default connect(mapStateToProps, null)(Cart)