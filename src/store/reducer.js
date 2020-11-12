
const initialState = {
    cartCount: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
};

const reducer = (state = initialState, action) => {

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