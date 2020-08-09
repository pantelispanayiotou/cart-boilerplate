const initState = {
    products: [], 
    orderTotal: 0
}

function duplicateItem(products,item) {
    let index = products.findIndex((product) => 
        JSON.stringify(product) === JSON.stringify(item) 
    )

    console.log("INDEX ", index);
}

function calculateTotal(products) {
    let sum = 0;
    products.map((item) => {
        sum += item.price * item.quantity;
    })
    return sum;
}

const reducer = (state = initState, action) => {
   
    switch (action.type) {
        case "ADD_TO_CART": {
            duplicateItem(state.products, action.payload);
            let items = state.products.concat(action.payload);
            let orderTotal = calculateTotal(items);
            return {...state, products: state.products.concat(action.payload), orderTotal}
        }
        default: {
            return state;
        }
    }
}

export default reducer;