import axios from 'axios';

import {
  getListUserReducer,
  getListTransactionReducer,
  getListRouteReducer,
} from '../reducers/listReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getListUser = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  try {
    const { data } = await axios.get(`${BASE_URL}/admin/get-user`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(getListUserReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const getListTransaction = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  try {
    const { data } = await axios.get(`${BASE_URL}/admin/get-transaction`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(getListTransactionReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const getListRoute = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  try {
    const { data } = await axios.get(`${BASE_URL}/admin/get-route`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(getListRouteReducer(data.data));
  } catch (error) {
    throw error;
  }
};
