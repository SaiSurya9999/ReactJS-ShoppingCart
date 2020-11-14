
const initialState = {
    cartCount: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
};

const reducer = (state = initialState, action) => {
    // console.log(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : "CART NOT SET!");
    switch (action.type) {
        case "cartUpdate":
            return {
                ...state,
                cartCount: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
            };
        default:
            break;
    }
    return state;
};

export default reducer;