import axios from 'axios';

import { getListAirportReducer } from '../reducers/listairportReducer';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getListAirport = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/list-airport`);
    console.log(data.data);
    dispatch(getListAirportReducer(data.data));
  } catch (error) {
    throw error;
  }
};
