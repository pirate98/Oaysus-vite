import {
  default as MuiInput,
  OutlinedInputProps,
} from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";

import {
  inputWidth,
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "@/assets/css/_variables.module.scss";

export type OaysusInputProps = {
  small?: boolean;
  fullWidth?: boolean;
} & OutlinedInputProps;

export const Input = styled(
  ({ small, fullWidth, ...props }: OaysusInputProps) => {
    return (
      <MuiInput
        {...props}
        sx={{
          width: fullWidth ? "100%" : small ? "80px" : inputWidth,
          minWidth: small ? "80px" : inputWidth,
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
  }
)({});
