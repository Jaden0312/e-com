import 
{ ADD_LIST,
  DELETE_LIST,
  INCREASE_QTY,
  GLOBALCART_OPEN,
  GLOBALCART_CLOSE } 
from "./constants";
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

export const increaseCartQty = (id) => {
  return {
    type: INCREASE_QTY,
    payload: id,
  }
}

export const openGlobalCart = (toggle) => {
  return {
    type: GLOBALCART_OPEN,
    payload: toggle,
  }
}

export const closeGlobalCart = (toggle) => {
  return {
    type: GLOBALCART_CLOSE,
    payload: toggle,
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