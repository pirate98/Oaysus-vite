import { default as MuiInput } from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

import {
  inputWidth,
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "@/assets/css/_variables.module.scss";

export const Input = styled(({ small, fullWidth, ...props }) => {
  return (
    <MuiInput
      {...props}
      sx={{
        width: fullWidth ? "100%" : inputWidth,
        minWidth: small ? "80px" : inputWidth,
        width: small ? "80px" : inputWidth,
        background: "white",
        input: {
          padding: inputPadding,
          fontSize: inputFontSize,
        },
        "&.MuiOutlinedInput-root.Mui-focused fieldset": {
          borderColor: inputBorderFocused,
        },
      }}
    />
  );
})({});
