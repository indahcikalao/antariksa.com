import axios from 'axios';

import { 
  getListUserReducer, 
  getListTransactionReducer 
} from '../reducers/listReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getListUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/admin/get-user`);
    dispatch(getListUserReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const getListTransaction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/admin/get-transaction`);
    dispatch(getListTransactionReducer(data.data));
  } catch (error) {
    throw error;
  }
};