import axios from "axios";
import { toast } from "react-toastify";

export const adminAddRoute = (data, callback) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/route`,
      data,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    // console.log(result.status);
    if (result.status === 201) {
      toast.success("New Route Added!");
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const deleteListRoute = (id, callback) => async (dispatch, getState) => {
  const { token } = getState().auth;
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/flight/${id}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (result.status === 201) {
      toast.success("Route Deleted!");
      callback(result.status);
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
