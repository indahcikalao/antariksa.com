import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import listairportReducer from './listairportReducer';
import adminReducer from './adminReducer';
import listReducer from './listReducer';

// We have reducers, it will called in store to create an global state
export default combineReducers({
  auth: authReducer,
  admin: adminReducer,
  listAirport: listairportReducer,
  list: listReducer
});
