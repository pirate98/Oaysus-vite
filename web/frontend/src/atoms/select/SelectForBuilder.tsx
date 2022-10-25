import { forwardRef } from "react";

import { SelectBaseUnstyled } from "./selectBaseUnstyled/SelectBaseUnstyled";
import variables from "@/assets/css/_variables.module.scss";

export const SelectForBuilder = forwardRef(({ children, ...props }, ref) => {
  return (
    <SelectBaseUnstyled
      sx={{
        minWidth: variables.inputWidth,
        "+ .MuiPopperUnstyled-root": {
          width: variables.inputWidth,
          ul: {
            textAlign: "center",
          },
        },
      }}
      ref={ref}
      {...props}
    >
      {children}
    </SelectBaseUnstyled>
  );
});
