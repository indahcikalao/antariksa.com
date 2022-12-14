import axios from "axios";
import { toast } from "react-toastify";

import { setToken, setUser } from "../reducers/authReducer";
import { setAllHistory } from "../reducers/transactionReducer";
import { getNotifReducer } from "../reducers/notifReducer";
import {
  getListUserReducer,
  getListTransactionReducer,
  getListRouteReducer,
} from "../reducers/listReducer";

export const register = (data, callback) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data
    );
    if (result.status === 201) {
      toast.success("Register success!");
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      data
    );
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success("Login success!");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const whoami = (callback) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/auth/whoami`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    dispatch(setUser(result.data.data));
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      dispatch(setToken(null));
      callback(error.response.status);
    }
  }
};

export const setTokenGoogle = (code) => async (dispatch) => {
  localStorage.setItem("token", code);
  dispatch(setToken(code));
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
  dispatch(setUser(null));
  dispatch(setAllHistory([]));
  dispatch(getNotifReducer([]));
  dispatch(getNotifReducer([]));
  dispatch(getListRouteReducer([]));
  dispatch(getListTransactionReducer([]));
  dispatch(getListUserReducer([]));
};

export const forogtPw = (data, callback) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/forgot-password`,
      data
    );
    if (result.status === 200) {
      toast.success(
        "Link to Change your Password was Sent! Go Check your Email!"
      );
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const resetPw = (data, token, callback) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/reset-password?token=${token}`,
      data
    );
    console.log(result.status);
    if (result.status === 200) {
      toast.success("Password Changed!");
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const editUser = (data, callback) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/auth/editProfile`,
      data,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    localStorage.setItem("token", result.data.data.token);
    dispatch(setToken(result.data.data.token));
    dispatch(setUser(result.data.data.updatedUser));
    if (result.status === 201) {
      toast.success("Profile Updated Successfully!");
      callback(result.status);
    }
  } catch (error) {
    throw error;
  }
};
