import { createSlice } from "@reduxjs/toolkit";

import boilerPlatePage from "../../mockData/defaultBuilderPage";

const initialState = {
  activeMenu: 0,
  pageComponents: boilerPlatePage(),
  selectedPageComponentName: undefined,
};

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
    setSelectedPageComponentName: (state, action) => {
      state.selectedPageComponentName = action.payload;
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
      const component = state.selectedPageComponentName;

      const { module, key, value } = action.payload;
      // console.log({ component, module, key, value });

      const _pageComponents = [...state.pageComponents];

      const componentToUpdate = _pageComponents.find(
        (comp) => comp.name === component
      );

      componentToUpdate[module][key] = value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHoveredComponent,
  setActiveMenu,
  setSelectedPageComponentName,
  setPageComponents,
  removeComponentFromPage,
  updatePageComponents,
} = builderSlice.actions;

export default builderSlice.reducer;
