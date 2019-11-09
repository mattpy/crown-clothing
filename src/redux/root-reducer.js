import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});