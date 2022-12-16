import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addRoute: [],
};

const adminSlicer = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    // getListAirportReducer: (state, action) => {
    //   state.listAirport = action.payload;
    // },
  },
});

export const {} = adminSlicer.actions;

export default adminSlicer.reducer;
