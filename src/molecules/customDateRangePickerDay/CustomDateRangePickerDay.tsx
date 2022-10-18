import { useState, forwardRef, useCallback } from "react";

import { SelectBaseUnstyled } from "@/atoms";

// import { Select } from "@/atoms";

// export function DateSelector() {
//   return <Select.Primary options={options} value={""} />;
// }

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import { defaultStaticRanges, defaultInputRanges } from "./defaultRanges";
import { Button } from "../button";
import { Popper } from "../../atoms/popper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../data/store";
import { setDateSelectionRange } from "../../pages/upsells/upsellsSlice";

export function CustomDateRangePickerDay() {
  const dispatch = useDispatch();

  const {
    upsells: { dateSelectionRange },
  } = useSelector((state: RootState) => state);

  const handleChange = (e) => {
    // return;
    console.log(e);
    const { selection } = e;
    dispatch(setDateSelectionRange(selection));
  };

  return (
    <>
      <Popper.Unstyled
        button={useCallback(
          (props: any) => (
            <Button.Date small {...props} />
          ),
          []
        )}
        // button={Button.Date}
      >
        <DateRangePicker
          ranges={[dateSelectionRange]}
          showSelectionPreview
          // showMonthAndYearPickers={false}
          staticRanges={defaultStaticRanges}
          inputRanges={defaultInputRanges}
          onChange={handleChange}
        />
      </Popper.Unstyled>
    </>
  );
}

const options = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: 20 },
  { label: "Last 7 days", value: 10 },
  { label: "Last 30 days", value: 10 },
  { label: "Last 90 days", value: 10 },
  { label: "Last month", value: 10 },
  { label: "Last year", value: 10 },
  { label: "Week to date", value: 10 },
  { label: "Month to date", value: 10 },
  { label: "Quarter to date", value: 10 },
  { label: "Year to date", value: 10 },
];
