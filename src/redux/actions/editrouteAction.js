import axios from 'axios';
import { toast } from 'react-toastify';

import { 
  getEditRouteIdReducer,
} from '../reducers/editrouteReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getEditRouteId = (id) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const { data } = await axios.get(`${BASE_URL}/flight/getById/${id}`, {
      headers: {
        Authorization: `${token}`
      }
    });
    dispatch(getEditRouteIdReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const putEditRoute = (data, id, callback) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.put(
      `${BASE_URL}/editFlight/${id}`,
      data,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    // console.log(result.status);
    if (result.status === 201) {
      toast.success('Route Updated Successfully!');
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
