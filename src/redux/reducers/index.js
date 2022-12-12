import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import listairportReducer from './listairportReducer';

// We have reducers, it will called in store to create an global state
export default combineReducers({
  auth: authReducer,
  listAirport : listairportReducer,
});
