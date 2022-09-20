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
    removeComponentWithGivenName: (state, action) => {
      const pageComponentsWithoutGivenName = state.pageComponents.filter(
        (comp) => comp.name !== action.payload
      );

      state.pageComponents = pageComponentsWithoutGivenName;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHoveredComponent,
  setActiveMenu,
  setActiveComponent,
  setPageComponents,
  removeComponentWithGivenName,
} = builderSlice.actions;

export default builderSlice.reducer;
