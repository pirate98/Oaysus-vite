import {
  default as MuiAutocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete";
import { styled } from "@mui/system";
import { inputWidth } from "@/assets/css/_variables.module.scss";
import TextField from "@mui/material/TextField";

import { ReactComponent as SelectIcon } from "@/assets/svg/selectListBtn.svg";
import {
  inputPadding,
  inputFontSize,
  inputBorderFocused,
  selectShadow,
} from "@/assets/css/_variables.module.scss";

type Props = { options: any[] } & Omit<
  AutocompleteProps<any, any, any, any>,
  "renderInput"
>;

export const Autocomplete = styled(({ options, ...props }: Props) => (
  <MuiAutocomplete
    {...props}
    options={options || []}
    popupIcon={popupIcon}
    renderInput={renderInput}
  />
))({
  "&": { width: inputWidth },
  background: "white",
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
    bottom: 0,
    padding: "0",
    display: "flex",
    alignItems: "center",
    "& .MuiSvgIcon-root": {
      margin: "3px",
    },
    ".MuiAutocomplete-clearIndicator": {
      margin: "2px",
      padding: "0px",
    },
  },
  "button.MuiAutocomplete-popupIndicator": {
    margin: "3px 0",
    padding: "3px",
  },
});

const popupIcon = <SelectIcon />;

const renderInput = (params: any) => (
  <TextField
    {...params}
    sx={{
      "& .MuiInputBase-input.MuiOutlinedInput-input": {
        padding: inputPadding,
        fontSize: inputFontSize,
      },
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: `${inputBorderFocused} !important`,
      },
    }}
  />
);
