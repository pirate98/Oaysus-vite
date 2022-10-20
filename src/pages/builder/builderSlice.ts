import { builderSettings } from "@/data/builderSettings";

import { createSlice } from "@reduxjs/toolkit";

type PageComponent = {
  name: string;
};

type State = {
  hoveredComponent?: string;
  activeMenu: number;
  selectedPageComponentName?: string;
  componentList: string[];
  pageComponents: (Record<any, any> & PageComponent)[];
  draggedComponent?: string;
  page?: (Record<any, any> & PageComponent)[];
};

const initialState: State = {
  activeMenu: 0,
  // pageComponents: boilerPlate,
  selectedPageComponentName: undefined,
  componentList: builderSettings.templates[0],
  pageComponents: [],
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
      console.log("setPageComponents", action.payload);
      state.pageComponents = action.payload;
    },

    removeComponentFromPage: (state, action) => {
      const pageComponentsWithoutGivenName = state.pageComponents?.filter(
        (comp: Record<any, any>) => comp.name !== action.payload
      );

      state.pageComponents = pageComponentsWithoutGivenName;
    },
    updatePageComponents: (state, action) => {
      const component = state.selectedPageComponentName;
      if (!component) return;

      let { module, key, value } = action.payload;

      // handle pseudo classes
      if (typeof key !== "string") {
        const [key1, key2] = key;

        key = key1;
        // move handling this to redux later
        value = { [key2]: value };
      }

      // console.log({ component, module, key, value });

      const _pageComponents = [...state.pageComponents];

      const componentToUpdate = _pageComponents.find(
        (comp) => comp.name === component
      );

      if (!componentToUpdate) return;

      if (module && module.length) {
        componentToUpdate[module][key] = value;
      } else {
        componentToUpdate[key] = value;
      }
    },
    setDraggedComponent: (state, action) => {
      state.draggedComponent = action.payload;
    },
    setComponentList: (state, action) => {
      state.componentList = action.payload;
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
  setComponentList,
} = builderSlice.actions;

export default builderSlice.reducer;
