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
    console.log("changed quantity", i,newQuantity)
    return {
        type: "CHANGE_QUANTITY", 
        payload: {
            index: i, 
            newQuantity
        }
    }
}
