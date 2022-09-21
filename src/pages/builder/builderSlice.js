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
    removeComponentFromPage: (state, action) => {
      const pageComponentsWithoutGivenName = state.pageComponents.filter(
        (comp) => comp.name !== action.payload
      );

      state.pageComponents = pageComponentsWithoutGivenName;
    },
    updatePageComponents: (state, action) => {
      const { component, module, type, value } = action.payload;
      console.log({ component, module, type, value });

      const _pageComponents = [...state.pageComponents];

      const componentToUpdate = _pageComponents.find(
        (comp) => comp.name === component
      );

      componentToUpdate[module][type] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHoveredComponent,
  setActiveMenu,
  setActiveComponent,
  setPageComponents,
  removeComponentFromPage,
  updatePageComponents,
} = builderSlice.actions;

export default builderSlice.reducer;
