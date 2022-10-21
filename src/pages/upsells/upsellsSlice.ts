import { createSlice } from "@reduxjs/toolkit";
import { Range } from "react-date-range";

import { defineds } from "@/molecules/customDateRangePickerDay/defaultRanges";
import { UpsellsData, rows } from "@/mockData/defaultUpsells";

type Trigger = Record<any, any>;
type TypeTriggers = Trigger[];

type State = {
  triggers: TypeTriggers[];
  upsells: Record<any, any>[][];
  upsellsData: UpsellsData[];
  testTrigger?: TypeTriggers;
  dateSelectionRange: Range;
};

const initialState: State = {
  triggers: [[{}]],
  upsells: [],
  dateSelectionRange: {
    startDate: defineds.startOf30DaysAgo,
    endDate: defineds.endOfToday,
    key: "selection",
  },
  upsellsData: rows,
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
        (undefined, idx: number) => idx !== conditionId
      );
    },
    testTrigger: (state) => {
      state.testTrigger = state.triggers;
    },
    addUpsell: (state, action: { payload: Record<any, any>[] }) => {
      state.upsells.push(action.payload);
    },
    setDateSelectionRange: (state, action) => {
      state.dateSelectionRange = action.payload;
    },
    setUpsellsData: (state, action) => {
      console.log(action.payload);
      state.upsellsData = action.payload;
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
  setDateSelectionRange,
  setUpsellsData,
} = upsellsSlice.actions;

export default upsellsSlice.reducer;
