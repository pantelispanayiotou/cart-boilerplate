const initState = {
    products: [], 
    orderTotal: 0
}

function calculateTotal(products) {
    let sum = 0;
    let total = products.map((item) => {
        sum += item.price * item.quantity;
    })
    return total;
}

const reducer = (state = initState, action) => {
   
    switch (action.type) {
        case "ADD_TO_CART": {
            let items = state.products.concat(action.payload);
            let orderTotal = calculateTotal(items);
            console.log(items, orderTotal);
            return {...state, products: state.products.concat(action.payload), orderTotal}
        }
        default: {
            return state;
        }
    }
}

export default reducer;