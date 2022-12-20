import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listUser : [],
  listTransaction : [],
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
    }
  },
});

export const { getListUserReducer, getListTransactionReducer } = listSlicer.actions;

export default listSlicer.reducer;
