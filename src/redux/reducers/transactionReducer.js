import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticket: [],
  allHistory: [],
  detailHistory: [],
};

const transactionSlicer = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTicket: (state, action) => {
      state.ticket = action.payload;
    },
    setAllHistory: (state, action) => {
      state.allHistory = action.payload;
    },
    setDetailHistory: (state, action) => {
      state.detailHistory = action.payload;
    },
  },
});

export const { setTicket, setAllHistory, setDetailHistory } =
  transactionSlicer.actions;

export default transactionSlicer.reducer;
