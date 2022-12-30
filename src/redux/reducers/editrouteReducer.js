import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editRouteId : [],
};

const editRouteIdSlicer = createSlice({
  name: 'editRouteId',
  initialState,
  reducers: {
    getEditRouteIdReducer: (state, action) => {
      state.editRouteId = action.payload;
    }
  },
});

export const { getEditRouteIdReducer } = editRouteIdSlicer.actions;

export default editRouteIdSlicer.reducer;
