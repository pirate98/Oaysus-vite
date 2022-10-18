import { forwardRef } from "react";

import { Secondary } from "@/atoms/button/Secondary";
import {
  ButtonBaseProps,
  ButtonRef,
} from "@/atoms/button/buttonBase/ButtonBase";
import { CalendarSvg } from "@/assets/svg";

export const Date = forwardRef((props: ButtonBaseProps, ref: ButtonRef) => {
  return (
    <Secondary customRef={ref} {...props}>
      Select Date <CalendarSvg />
    </Secondary>
  );
});
