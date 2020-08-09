export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART", 
        payload: product
    }
}

export const deleteProduct = (i) => {
    return {
        type: "DELETE_PRODUCT", 
        payload: i
    }
}

export const changeQuantity = (i, newQuantity) => {
    return {
        type: "CHANGE_QUANTITY", 
        payload: {
            index: i, 
            newQuantity
        }
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART", 
    }
}
