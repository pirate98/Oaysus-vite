// Purpose of this component is to style TextField component within Autocomplete

import * as React from "react";

import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
// import { Autocomplete } from "@mui/material";
import { Autocomplete } from "./Autocomplete";

import { ReactComponent as SelectIcon } from "../../assets/svg/selectListBtn.svg";

const options = ["Option 1", "Option 2"];

export default function CustomAutocomplete({ defaultValue }) {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Box>
      <Autocomplete
        popupIcon={<SelectIcon />}
        value={value}
        // defaultValue={defaultValue}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label=""
            placeholder={defaultValue}
            sx={{
              "& .MuiInputBase-input.MuiOutlinedInput-input": {
                padding: "6.5px 4px 6.5px 12px",
                fontSize: "14px",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "green !important",
              },
            }}
          />
        )}
      />
    </Box>
  );
}
