import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import listairportReducer from './listairportReducer';
import adminReducer from './adminReducer';
import transactionReducer from './transactionReducer';
import listReducer from './listReducer';

export default combineReducers({
  auth: authReducer,
  admin: adminReducer,
  listAirport: listairportReducer,
  transaction: transactionReducer,
  list: listReducer
});
