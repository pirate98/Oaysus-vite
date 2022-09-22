import { useState, useEffect, useRef } from "react";

import { Autocomplete } from "../../atoms";
import fieldClasses from "../settingField/.module.scss";
import { ReactComponent as SelectIcon } from "../../assets/svg/selectListBtn.svg";

const options = ["400", "500", "600", "700", "800"];

export function FontWeight({ defaultValue }) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState(defaultValue);
  const textFieldRef = useRef();

  // This enables handlers in field wrapper to catch the changes
  useEffect(() => {
    console.log({ valueUpdatedTo: value });
    textFieldRef.current.blur();
  }, [value]);

  return (
    <div className={fieldClasses.singleAttribute}>
      <p>Font Weight</p>
      <Autocomplete
        name={"fontWeight"}
        reference={textFieldRef}
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
        // id={name}
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
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
    </div>
  );
}
