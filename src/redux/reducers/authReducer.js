import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  role: null,
  user: null,
};

const authSlicer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setRole, setUser } = authSlicer.actions;

export default authSlicer.reducer;
