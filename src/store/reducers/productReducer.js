import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_ERROR } from "../actions/constants";

let initialState = {
    products: [],
    error: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload.products };
        case FETCH_PRODUCTS_ERROR:
            return { ...state, error: action.payload }
    }
};

export default productReducer;