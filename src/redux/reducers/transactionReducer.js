import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticket: [],
  allHistory: [],
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
  },
});

export const { setTicket, setAllHistory } = transactionSlicer.actions;

export default transactionSlicer.reducer;
