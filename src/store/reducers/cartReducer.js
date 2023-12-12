import { ADD_LIST } from '../actions/constants';
import { DELETE_LIST } from '../actions/constants';

const initialState = [];

export function cartReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case DELETE_LIST:
      
  }
  return state;
}