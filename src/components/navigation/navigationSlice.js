import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPageButtons: (state, action) => {
      state.pageButtons = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPageButtons } = navigationSlice.actions;

export default navigationSlice.reducer;
