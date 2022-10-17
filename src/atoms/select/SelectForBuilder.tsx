import { forwardRef } from "react";

import { CustomSelect } from "./CustomSelect";
import variables from "@/assets/css/_variables.module.scss";

export const SelectForBuilder = forwardRef((props, ref) => {
  const propsUpdated = { ...props };
  delete propsUpdated.children;

  return (
    <CustomSelect
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
      {...propsUpdated}
    >
      {props.children}
    </CustomSelect>
  );
});
