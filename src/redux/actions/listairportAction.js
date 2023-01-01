import axios from "axios";

import {
  getListAirportReducer,
  getSearchAirportReducer,
} from "../reducers/listairportReducer";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getListAirport = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/list-airport`);
    dispatch(getListAirportReducer(data.data));
  } catch (error) {
    throw error;
  }
};

export const getSearchAirport = (oa, da, dd, filter) => async (dispatch) => {
  try {
    if (filter) {
      const { data } = await axios.get(
        `${BASE_URL}/search?oa=${oa}&da=${da}&dd=${dd}&price=${filter}`
      );
      dispatch(getSearchAirportReducer(data.data));
    } else {
      const { data } = await axios.get(
        `${BASE_URL}/search?oa=${oa}&da=${da}&dd=${dd}`
      );
      dispatch(getSearchAirportReducer(data.data));
    }
  } catch (error) {
    throw error;
  }
};
