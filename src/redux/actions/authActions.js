import axios from 'axios';
import { toast } from 'react-toastify';

import { setToken, setUser } from '../reducers/authReducer';

export const register = (data, callback) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data
    );
    // console.log(result.status);
    if (result.status === 201) {
      toast.success('Register success!');
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
    // console.log(result.data);
    if (result.data.data.token) {
      localStorage.setItem('token', result.data.data.token);
      dispatch(setToken(result.data.data.token));
      toast.success('Login success!');
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const whoami = (callback) => async (dispatch, getState) => {
  try {
    // Get token
    const { token } = getState().auth;

    // Authorize from backend
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
      // remove token
      localStorage.removeItem('token');
      dispatch(setToken(null));
      callback(error.response.status);
    }
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch(setToken(null));
  dispatch(setUser(null));
};

// export const loginWithGoogle = (accessToken) => async (dispatch) => {
//   try {
//     const data = {
//       access_token: accessToken,
//     };
//     const result = await axios.post(
//       `${process.env.REACT_APP_AUTH_API}/api/v1/auth/google`,
//       data
//     );
//     if (result.data.token) {
//       // Set token from backend to local storage
//       // {"data": { "token": "ini token" }}
//       localStorage.setItem('token', result.data.token);
//       dispatch(setToken(result.data.token));
//       toast.success('Login success!');
//     }
//   } catch (error) {
//     // If there are any error it will show the error message from backend
//     // { "message": "Password salah" }
//     toast.error(error.response.data.message);
//   }
// };

export const forogtPw = (data, callback) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/forgot-password`,
      data
    );
    console.log(result.status);
    if (result.status === 200) {
      toast.success('Email Sent!');
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const resetPw = (data, callback) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/reset-password`,
      data
    );
    console.log(result.status);
    if (result.status === 200) {
      toast.success('Reset!');
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
