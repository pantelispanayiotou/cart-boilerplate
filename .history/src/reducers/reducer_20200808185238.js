const initState = {
    products: [], 
    orderTotal: 0
}

function isDuplicate(products,item) {
    let index = products.findIndex((product) => 
        JSON.stringify(product) === JSON.stringify(item) 
    )
    return index;
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

            let duplicateIndex = isDuplicate(state.products, action.payload);
            if (duplicateItem != -1) {
                var items = [...state.products];
                items[duplicateIndex] = {...items[duplicateIndex], quantity: items[duplicateIndex].quantity + 1}
            } else {
                var items = state.products.concat(action.payload);
            }
            let orderTotal = calculateTotal(items);
            return { ...state, products: items, orderTotal }
        }
        default: {
            return state;
        }
    }
}

export default reducer;