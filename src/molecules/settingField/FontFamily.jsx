import { useEffect, useRef, useState } from "react";

// import { Autocomplete } from "@mui/material";
import { Autocomplete, CustomAutocomplete } from "../../atoms";
import { useGetFontsQuery } from "../../data/googleAPI";
import classes from "../settingField/.module.scss";

const options = ["Option 1", "Option 2"];

export function FontFamily() {
  const { data, error } = useGetFontsQuery();
  const textFieldRef = useRef();
  console.log({ data, error });

  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // This enables handlers in wrapper to catch the changes
  useEffect(() => {
    textFieldRef.current.blur();
  }, [value]);

  return (
    <div className={classes.singleAttribute}>
      <p>Font Family</p>
      <Autocomplete
        referance={textFieldRef}
        placeholder="Choose a font"
        value={value}
        onChange={(event, newValue) => {
          console.log({ change: newValue });
          // console.log(textFieldRef);
          setValue(newValue);
          // event.target.blur();
        }}
        inputValue={inputValue}
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
