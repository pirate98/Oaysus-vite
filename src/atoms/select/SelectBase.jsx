import { default as MuiSelect } from "@mui/material/Select";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";

import {
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "@/assets/css/_variables.module.scss";

export const SelectBase = styled(({ options, ...props }) => (
  <MuiSelect {...props}>
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
  textAlign: "start",
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
