import { default as MuiInput } from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

import {
  inputWidth,
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "../../assets/css/_variables.module.scss";

export const Input = styled((props) => {
  return (
    <MuiInput
      {...props}
      sx={{
        width: props.fullWidth ? "100%" : inputWidth,
      }}
    />
  );
})({
  background: "white",
  input: {
    padding: inputPadding,
    fontSize: inputFontSize,
  },
  "&.MuiOutlinedInput-root.Mui-focused fieldset": {
    borderColor: inputBorderFocused,
  },
});
