import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';

// We have reducers, it will called in store to create an global state
export default combineReducers({
  auth: authReducer,
});
