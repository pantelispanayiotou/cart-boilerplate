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