import { useState } from "react";

// import { Autocomplete } from "@mui/material";
import { Autocomplete, CustomAutocomplete } from "../../atoms";
import { useGetFontsQuery } from "../../data/googleAPI";
import classes from "../settingField/.module.scss";

const options = ["Option 1", "Option 2"];

export function FontFamily() {
  const { data, error } = useGetFontsQuery();
  console.log({ data, error });

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={classes.singleAttribute}>
      <p>Font Family</p>
      <Autocomplete
        placeholder="Choose a font"
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        // inputValue={inputValue}
        // onInputChange={(event, newInputValue) => {
        //   if (!event) return; //  prevent update on page load
        //   setInputValue(newInputValue);
        // }}
        name={"fontFamily"}
        id="controllable-states-demo"
        options={data ? data.items : []}
        getOptionLabel={(option) => option.family}
      />
    </div>
  );
}
