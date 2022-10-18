import { forwardRef } from "react";

import { Secondary } from "@/atoms/button/Secondary";
import {
  ButtonBaseProps,
  ButtonRef,
} from "@/atoms/button/buttonBase/ButtonBase";

export const Date = forwardRef((props: ButtonBaseProps, ref: ButtonRef) => {
  return (
    <Secondary customRef={ref} {...props}>
      Select Date
    </Secondary>
  );
});
