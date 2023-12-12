import { ADD_LIST } from "./constants";
import { DELETE_LIST } from "./constants";
import { FETCH_PRODUCTS_REQUEST } from "./constants";
import { FETCH_PRODUCTS_ERROR } from "./constants";
import { FETCH_PRODUCTS_SUCCESS } from "./constants";


export const addToCart = (items) => {
  return {
    type: ADD_LIST,
    payload: items,
  }
}

export const deleteList = (item) => {
  return {
    type: DELETE_LIST,
    payload: item,
  }
}


export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error
  }
}

export const fetchProductsSuccess = Products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { Products }
})