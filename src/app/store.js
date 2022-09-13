import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "../pages/navigation/navigationSlice";
import builderReducer from "../pages/builder/builderSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    builder: builderReducer,
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
    }),
});
