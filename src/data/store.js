import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "../organisms/navigation/navigationSlice";
import builderReducer from "../pages/builder/builderSlice";
import { googleApi } from "./googleAPI";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    builder: builderReducer,
    [googleApi.reducerPath]: googleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "builder/setHoveredComponent",
          "navigation/setPageButtons",
        ],
        // Ignore these paths in the state
        ignoredPaths: ["builder.hoveredComponent", "navigation.pageButtons"],
      },
    }).concat(googleApi.middleware),
});
