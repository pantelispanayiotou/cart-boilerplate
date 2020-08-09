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
       return sum += item.price * item.quantity;
    })
    
    return sum;
}

const reducer = (state = initState, action) => {
   
    switch (action.type) {
        /*  This is when the user adds an item to the cart. First it checks if the item is present in 
            the cart so that it doesn't have to add it again and update only the quantity. If the item 
            is present then it uses the index of it to update it. If it is not present then the item 
            is added to the array
        */
        case "ADD_TO_CART": {
            let duplicateIndex = isDuplicate(state.products, action.payload);
            var items = null;
            if (duplicateIndex !== -1) {
                 items = [...state.products];
                items[duplicateIndex] = {...items[duplicateIndex], quantity: items[duplicateIndex].quantity + 1}
            } else {
                items = state.products.concat(action.payload);
            }
            var orderTotal = calculateTotal(items);
            return { ...state, products: items, orderTotal }
        }
        /* An item is deleted based on the index that i got from the action. Because we cannot directly edit the state
        (immutability) we create a copy of the original array using the spread operators. The new array is consisted of the 
        items from the start of the array until the index we don't won't and i also concatenate the items after the unwanted 
        index
        */
        case "DELETE_PRODUCT": {
            var newProducts = [...state.products.slice(0, action.payload), ...state.products.slice(action.payload + 1)];
            var orderTotal = calculateTotal(newProducts);
            return {...state, products: newProducts, orderTotal }
        }
        /* 
        The quantity is changed based on the payload value we get from the action. Again, we create a new products array 
        and based on the index and quantity value i update the quantity of the specific item. 
        */
        case "CHANGE_QUANTITY": {
            var index = action.payload.index;
            var newQuantity = action.payload.newQuantity;
            var items = [...state.products];
            items[index] = { ...items[index], quantity: items[index].quantity + newQuantity }
            var orderTotal = calculateTotal(items);
            return { ...state, products: items, orderTotal }
        }
        /*
        The products array and the orderTotal are reset if the clear cart action is fired.
        */
        case "CLEAR_CART": {
            return {...state, products: [], orderTotal: 0}
        }
        default: {
            return state;
        }
    }
}

export default reducer;