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
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHoveredComponent, setActiveMenu, setActiveComponent } =
  builderSlice.actions;

export default builderSlice.reducer;
