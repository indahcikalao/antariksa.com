import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser : [],
  listTransaction : [],
  listRoute : [],
};

const listSlicer = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getListUserReducer: (state, action) => {
      state.listUser = action.payload;
    },
    getListTransactionReducer: (state, action) => {
      state.listTransaction = action.payload;
    },
    getListRouteReducer: (state, action) => {
      state.listRoute = action.payload;
    }
  },
});

export const { getListUserReducer, getListTransactionReducer, getListRouteReducer } = listSlicer.actions;

export default listSlicer.reducer;
