import { useCallback } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";

import "./overrides.css";
import { defaultStaticRanges, defaultInputRanges } from "./defaultRanges";
import { Button } from "../button";
import { Popper } from "@/atoms/popper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/data/store";
import { setDateSelectionRange } from "@/pages/upsells/upsellsSlice";

export function CustomDateRangePickerDay() {
  const dispatch = useDispatch();

  const {
    upsells: { dateSelectionRange },
  } = useSelector((state: RootState) => state);

  const handleChange = (e: RangeKeyDict) => {
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
            <Button.Date small {...props}>
              {dateSelectionRange.startDate?.toLocaleDateString()} -{" "}
              {dateSelectionRange.endDate?.toLocaleDateString()}
            </Button.Date>
          ),
          []
        )}
        // button={Button.Date}
      >
        <DateRangePicker
          ranges={[dateSelectionRange]}
          // showMonthAndYearPickers={false}
          staticRanges={defaultStaticRanges}
          inputRanges={[]}
          onChange={handleChange}
        />
      </Popper.Unstyled>
    </>
  );
}
