// Purpose of this component is to style TextField component within Autocomplete
import * as React from "react";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

import { Autocomplete } from "./Autocomplete";
import { ReactComponent as SelectIcon } from "../../assets/svg/selectListBtn.svg";
import {
  inputPadding,
  inputFontSize,
  inputBorderFocused,
} from "../../assets/css/_variables.module.scss";

const options = ["Option 1", "Option 2"];

export function CustomAutocomplete({ placeholder }) {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  // console.log({ value, inputValue });
  return (
    <Autocomplete
      popupIcon={<SelectIcon />}
      value={value}
      // defaultValue={}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        if (!event) return; //  prevent update on page load
        setInputValue(newInputValue);
      }}
      id="controllable-states-demo"
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          placeholder={placeholder}
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
      )}
    />
  );
}
