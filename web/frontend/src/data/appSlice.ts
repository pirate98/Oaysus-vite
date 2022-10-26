import { createSlice } from "@reduxjs/toolkit";

type State = {
  shopifyAppName?: string;
};

const initialState: State = {};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setShopifyAppName: (state, action) => {
      state.shopifyAppName = action.payload;
    },
  },
});

export const { setShopifyAppName } = appSlice.actions;

export default appSlice.reducer;
