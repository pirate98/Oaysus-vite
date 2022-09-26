import { default as MuiSelect } from "@mui/material/Select";
import { styled } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";

import {
  inputWidth,
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "../../assets/css/_variables.module.scss";

export const Select = styled((props) => {
  let customProps = { ...props };
  delete customProps.options;

  return (
    <MuiSelect {...customProps}>
      {props.options &&
        props.options.map((option, idx) => (
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
  );
})({
  "&": { width: inputWidth },
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
