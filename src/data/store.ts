import { configureStore } from "@reduxjs/toolkit";

import builderReducer from "@/pages/builder/builderSlice";
import upsellsReducer from "@/pages/upsells/upsellsSlice";
import { googleApi } from "./googleAPI";
import { backendApi } from "./backendApi";

export const store = configureStore({
  reducer: {
    builder: builderReducer,
    upsells: upsellsReducer,
    [googleApi.reducerPath]: googleApi.reducer,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          // "builder/setHoveredComponent",
          "navigation/setPageButtons",
        ],
        // Ignore these paths in the state
        ignoredPaths: [
          // "builder.hoveredComponent",
          "navigation.pageButtons",
        ],
      },
    })
      .concat(googleApi.middleware)
      .concat(backendApi.middleware),
  devTools: {
    // actionSanitizer: (action) => {
    //   action.type === "FILE_DOWNLOAD_SUCCESS" && action.data
    //     ? { ...action, data: "<<LONG_BLOB>>" }
    //     : action;
    // },
    // stateSanitizer: (state) => {
    //   if (state.navigation.pageButtons) {
    //     const navigation = {
    //       ...state.navigation,
    //       pageButtons: "<<LONG_BLOB>>",
    //     };
    //     return { ...state, navigation };
    //   }
    //   return state;
    // },
  },
});

export type RootState = ReturnType<typeof store>;
