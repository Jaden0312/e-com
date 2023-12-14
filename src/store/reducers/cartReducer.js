import 
{ ADD_LIST,DELETE_LIST,INCREASE_QTY } 
from '../actions/constants';

const initialState = [];

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return [...state, action.payload];
    case DELETE_LIST:
      // console.log(action.payload)
      // console.log(state);
      const filteredList = state.filter((item) => item.id !== action.payload)
      // console.log(filteredList);
      return filteredList;
    case INCREASE_QTY:
      const id = action.payload;
      console.log(id);
      console.log(state);
      // const updateQty = state.map((obj)=>{
      //   return obj.id == id ? {...obj, qty: qty+1 } : obj
      // });
      // return updateQty;
  }
  return state;
}