import { useState } from "react";

import { Input } from "./Input";
import classes from "./.module.scss";
import { inputWidth } from "../../assets/css/_variables.module.scss";

import { useEffect } from "react";

export function PxInput({ placeholder, small = false, ...args }) {
  const [value, setValue] = useState(args.value || "");

  const handleKeyDown = (e) =>
    e.keyCode === 38 || e.keyCode === 40 ? e.preventDefault() : "";

  const keyUpHandler = (e) => {
    // 38 up 40 down
    const { keyCode } = e;

    if (keyCode === 38 || keyCode === 40) {
      let _value = parseInt(value) || 0;
      _value = keyCode === 38 ? _value + 1 : _value - 1;

      setValue(_value.toString());
    }
  };

  useEffect(() => {
    setValue(args.value || "");
  }, [args]);

  const handleChange = (e) => {
    // e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Input
      sx={{
        minWidth: small ? "80px" : inputWidth,
        width: small ? "80px" : inputWidth,
      }}
      {...args}
      endAdornment={<p className={classes.px}>px</p>}
      placeholder={placeholder || (!value?.length ? "0" : "")}
      onKeyDown={handleKeyDown}
      onKeyUp={keyUpHandler}
      value={value}
      onChange={handleChange}
    />
  );
}
