export const addToCart = (product) => {
    console.log("product product");
    return {
        type: "ADD_TO_CART", 
        payload: product
    }
}