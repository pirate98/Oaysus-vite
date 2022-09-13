import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setHoveredComponent: (state, action) => {
      state.hoveredComponent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHoveredComponent } = builderSlice.actions;

export default builderSlice.reducer;
