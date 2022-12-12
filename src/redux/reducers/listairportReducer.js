import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listAirport: []
};

const listAirportSlicer = createSlice({
  name: "listAirport",
  initialState,
  reducers: {
    getListAirportReducer: (state, action) => {
      state.listAirport = action.payload;
    }
  },
});

export const { getListAirportReducer } = listAirportSlicer.actions;

export default listAirportSlicer.reducer;
