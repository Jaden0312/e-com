import axios from 'axios';
import { fetchProductsRequest, fetchProductsError, fetchProductsSuccess } from './index';

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest());
        axios.get('http://localhost:3000/allProducts/')
        .then(response => {
            dispatch(fetchProductsSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        });
    };
}