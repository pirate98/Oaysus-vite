import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeMenu: 0 };

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activeMenu = action.payload;
    },
    setHoveredComponent: (state, action) => {
      state.hoveredComponent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHoveredComponent, setActiveMenu } = builderSlice.actions;

export default builderSlice.reducer;
