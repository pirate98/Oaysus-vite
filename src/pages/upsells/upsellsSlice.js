import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  triggers: [[{}]],
  upsells: [],
};

export const upsellsSlice = createSlice({
  name: "upsells",
  initialState,
  reducers: {
    addOrTrigger: (state, action) => {
      const { id } = action.payload;
      state.triggers[id].push({});
    },
    addAndTrigger: (state) => {
      state.triggers.push([{}]);
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
    testTrigger: (state) => {
      state.testTrigger = state.triggers;
    },
    addUpsell: (state, action) => {
      state.upsells.push(action.payload);
    },
  },
});

export const {
  addOrTrigger,
  addAndTrigger,
  updateTrigger,
  deleteTrigger,
  testTrigger,
  addUpsell,
} = upsellsSlice.actions;

export default upsellsSlice.reducer;
