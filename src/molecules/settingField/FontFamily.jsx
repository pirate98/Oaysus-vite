import { useEffect, useRef, useState } from "react";

// import { Autocomplete } from "@mui/material";
import { Autocomplete, CustomAutocomplete } from "../../atoms";
import { useGetFontsQuery } from "../../data/googleAPI";
import classes from "../settingField/.module.scss";

export function FontFamily({ defaultValue }) {
  const { data, error } = useGetFontsQuery();
  const textFieldRef = useRef();
  console.log({ data, error });

  const [value, setValue] = useState(null);

  const _defaultValue =
    defaultValue && defaultValue.split(",") && defaultValue.split(",")[0];

  const [inputValue, setInputValue] = useState(_defaultValue || "");

  // This enables handlers in field wrapper to catch the changes
  useEffect(() => {
    textFieldRef.current.blur();
  }, [value]);

  return (
    <div className={classes.singleAttribute}>
      <p>Font Family</p>
      <Autocomplete
        reference={textFieldRef}
        placeholder="Choose a font"
        value={value}
        onChange={(event, newValue) => {
          console.log({ change: newValue });
          // console.log(textFieldRef);
          setValue(newValue);
          // event.target.blur();
        }}
        inputValue={inputValue || _defaultValue}
        onInputChange={(event, newInputValue) => {
          console.log({ input: newInputValue });
          if (!event) return; //  prevent update on page load
          console.log("udpate input");
          setInputValue(newInputValue);
        }}
        name={"fontFamily"}
        id="controllable-states-demo"
        options={data ? data.items : []}
        getOptionLabel={(option) => option.family}
      />
    </div>
  );
}
