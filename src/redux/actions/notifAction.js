import axios from 'axios';

import { 
  getNotifReducer,
} from '../reducers/notifReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getNotif = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const { data } = await axios.get(`${BASE_URL}/notification`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(getNotifReducer(data.data));
  } catch (error) {
  }
};

export const editisRead = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const { data } = await axios.put(`${BASE_URL}/notification/${id}`, null, {
      headers: {
        Authorization: `${token}`,
      },
    });
  } catch (error) {
  }
};