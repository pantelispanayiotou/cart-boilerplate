const initState = {
    products: [], 
    orderTotal: 0
}
/*
Accepts the cart list and the item to be added. Then the 
item to be added is compared with all the products to see if 
there is an equal product already in. If a duplicate item is found, 
then the function returns the index else it returns -1; 
*/

function isDuplicate(products,item) {
    let index = products.findIndex((product) => 
        JSON.stringify(product) === JSON.stringify(item) 
    )
    return index;
}

/*
Accepts the cart list and calculates the order total based on 
the quantity of each item and returns the sum.
*/

function calculateTotal(products) {
    var sum = 0;
    products.map((item) => {
        sum += item.price * item.quantity;
    })
    
    return sum;
}

const reducer = (state = initState, action) => {
   
    switch (action.type) {
        case "ADD_TO_CART": {
            let duplicateIndex = isDuplicate(state.products, action.payload);
            if (duplicateIndex != -1) {
                var items = [...state.products];
                items[duplicateIndex] = {...items[duplicateIndex], quantity: items[duplicateIndex].quantity + 1}
            } else {
                var items = state.products.concat(action.payload);
            }
            var orderTotal = calculateTotal(items);
            return { ...state, products: items, orderTotal }
        }
        case "DELETE_PRODUCT": {
            var newProducts = [...state.products.slice(0, action.payload), ...state.products.slice(action.payload + 1)];
            var orderTotal = calculateTotal(newProducts);
           
            return {...state, products: newProducts, orderTotal }
        }
        default: {
            return state;
        }
    }
}

export default reducer;