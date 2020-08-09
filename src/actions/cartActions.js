/*
    This is the add to cart action that receives the product object and assigns it 
    to the payload along with the respective type.
*/
export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART", 
        payload: product
    }
}

/*
    The delete product action receives the index of the product that is already in the 
    cart and passes it to the reducer.
*/
export const deleteProduct = (i) => {
    return {
        type: "DELETE_PRODUCT", 
        payload: i
    }
}

/*
    The change quantity action receives the index and the new quantity of the product (1 or -1) and assigns it 
    to the payload. 
*/
export const changeQuantity = (i, newQuantity) => {
    return {
        type: "CHANGE_QUANTITY", 
        payload: {
            index: i, 
            newQuantity
        }
    }
}

/*
    The action that resets the cart values.
*/
export const clearCart = () => {
    return {
        type: "CLEAR_CART", 
    }
}
