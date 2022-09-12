import { configureStore } from "@reduxjs/toolkit";

import navigationReducer from "../components/navigation/navigationSlice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
