import axios from 'axios';
import { toast } from 'react-toastify';

import {
  setAllHistory,
  setTicket,
  setDetailHistory,
} from '../reducers/transactionReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getTransactionTicket = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const { data } = await axios.get(`${BASE_URL}/transaction-ticket/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(setTicket(data.data.ticket));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const transactionData =
  (requestData, callback) => async (dispatch, getState) => {
    const { token } = getState().auth;
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/transaction`,
        requestData,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (result.status === 201) {
        toast.success('Booked!');
        callback(result.status);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const getAllHistory = () => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const { data } = await axios.get(`${BASE_URL}/history`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(setAllHistory(data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const getDetailHistory = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const { data } = await axios.get(`${BASE_URL}/history-detail/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    dispatch(setDetailHistory(data.data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
