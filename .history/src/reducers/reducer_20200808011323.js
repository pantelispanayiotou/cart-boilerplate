const initState = {
    products: [], 
    orderTotal: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            console.log("payload", action.payload);
        }
        default: {
            return state;
        }
    }
}

export default reducer;