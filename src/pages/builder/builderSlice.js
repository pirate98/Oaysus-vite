import { createSlice } from "@reduxjs/toolkit";

const initialState = { activeMenu: 0, pageComponents: [] };

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
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
    setPageComponents: (state, action) => {
      state.pageComponents = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHoveredComponent,
  setActiveMenu,
  setActiveComponent,
  setPageComponents,
} = builderSlice.actions;

export default builderSlice.reducer;
