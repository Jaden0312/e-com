import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer"
import { productReducer } from "./reducers/productReducer"

export default configureStore ({
    reducer: {
        cart: cartReducer,
    },
});