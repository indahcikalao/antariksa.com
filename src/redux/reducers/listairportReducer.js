import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listAirport: [],
  search: [],
};

const listAirportSlicer = createSlice({
  name: 'listAirport',
  initialState,
  reducers: {
    getListAirportReducer: (state, action) => {
      state.listAirport = action.payload;
    },
    getSearchAirportReducer: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { getListAirportReducer, getSearchAirportReducer } =
  listAirportSlicer.actions;

export default listAirportSlicer.reducer;
