import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  triggers: [[{ condition: "product" }]],
};

export const upsellsSlice = createSlice({
  name: "upsells",
  initialState,
  reducers: {
    addOrTrigger: (state, action) => {
      const { id } = action.payload;
      state.triggers[id].push({ condition: "product" });
    },
    addAndTrigger: (state) => {
      state.triggers.push([{ condition: "product" }]);
      // state.triggers = [...state.triggers, [{}]];
    },
    updateTrigger: (state, action) => {
      const { groupId, conditionId, key, value } = action.payload;
      state.triggers[groupId][conditionId][key] = value;
    },
    deleteTrigger: (state, action) => {
      const { groupId, conditionId } = action.payload;
      console.log({ groupId, conditionId });
      state.triggers[groupId] = state.triggers[groupId].filter(
        (con, idx) => idx !== conditionId
      );
    },
  },
});

export const { addOrTrigger, addAndTrigger, updateTrigger, deleteTrigger } =
  upsellsSlice.actions;

export default upsellsSlice.reducer;
