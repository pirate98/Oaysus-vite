import { default as boilerPlatePage } from "../../mockData/defaultBuilderPage";

import { createSlice } from "@reduxjs/toolkit";

let boilerPlate = boilerPlatePage();

const initialState = {
  activeMenu: 0,
  pageComponents: boilerPlate,
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
      if (!component) return;

      const { module, key, value } = action.payload;
      console.log({ component, module, key, value });

      const _pageComponents = [...state.pageComponents];

      const componentToUpdate = _pageComponents.find(
        (comp) => comp.name === component
      );

      if (module && module.length) {
        componentToUpdate[module][key] = value;
      } else {
        componentToUpdate[key] = value;
      }
    },
    setDraggedComponent: (state, action) => {
      state.draggedComponent = action.payload;
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
  setDraggedComponent,
} = builderSlice.actions;

export default builderSlice.reducer;
