import { default as MuiAutocomplete } from "@mui/material/Autocomplete";
import { styled } from "@mui/system";

export const Autocomplete = styled(MuiAutocomplete)({
  flexGrow: 1,
  // border: "1px solid rgba(186, 191, 195, 1)",
  boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  "&.MuiAutocomplete-root": {
    "& .MuiOutlinedInput-root": {
      padding: "0px",
    },
  },
  svg: {
    margin: "5px",
  },
  "& .MuiAutocomplete-endAdornment": {
    top: 0,
    padding: "2px 0",
    "& .MuiSvgIcon-root": {
      margin: "3px",
    },
  },
  "button.MuiAutocomplete-popupIndicator": {
    margin: "5px 0",
  },
});
