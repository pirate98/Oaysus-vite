import { default as MuiSelect } from "@mui/material/Select";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";

import {
  inputWidth,
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "@/assets/css/_variables.module.scss";

export const Select = styled(({ options, size, ...props }) => (
  <MuiSelect
    {...props}
    sx={{
      "&": { width: inputWidth, height: "36px" },
      textAlign: "start",
    }}
  >
    {options &&
      options.map((option, idx) => (
        <MenuItem
          key={idx}
          value={option.value}
          sx={{
            fontSize: inputFontSize,
          }}
        >
          {option.label}
        </MenuItem>
      ))}
  </MuiSelect>
))({
  background: "white",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  '[role="button"]': {
    padding: inputPadding,
    fontSize: inputFontSize,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${inputBorderFocused} !important`,
  },
  // ".MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper": {
  //   boxShadow: "none",
  // },
});
