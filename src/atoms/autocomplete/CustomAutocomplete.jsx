import * as React from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";

import { ReactComponent as SelectIcon } from "../../assets/svg/select-list-btn.svg";

const options = ["Option 1", "Option 2"];

export default function CustomAutocomplete({ defaultValue }) {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Box sx={{}}>
      {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
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
        sx={{
          width: "190px",
          // flexGrow: 1,
          // border: "1px solid rgba(186, 191, 195, 1)",
          boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "4px",
          "&.MuiAutocomplete-root": {
            "& .MuiOutlinedInput-root": {
              padding: "0px",
            },
          },
          svg: {
            margin: "6px",
          },
          "& .MuiAutocomplete-endAdornment": {
            top: 0,
            // padding: "2px 0",
            "& .MuiSvgIcon-root": {
              margin: "1px",
            },
          },
          "button.MuiAutocomplete-popupIndicator": {
            margin: "4.5px 0",
          },
        }}
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
