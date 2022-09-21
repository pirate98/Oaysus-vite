import { Input } from "./Input";
import classes from "./.module.scss";
import { inputWidth } from "../../assets/css/_variables.module.scss";
import { useState } from "react";
import { errorTextID } from "@shopify/polaris";

export function PxInput({ placeholder, small = false, ...args }) {
  const [value, setValue] = useState(args.value);

  const handleKeyDown = (e) => e.preventDefault();

  const keyUpHandler = (e) => {
    // 38 up 40 down
    const { keyCode } = e;

    let _value = parseInt(value) || 0;

    if (keyCode === 38) {
      _value++;
    } else if (keyCode === 40) {
      _value--;
    }

    setValue(_value.toString());
  };

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
      placeholder={placeholder || (!args.value.length ? "0" : "")}
      onKeyDown={handleKeyDown}
      onKeyUp={keyUpHandler}
      value={value}
      onChange={handleChange}
    />
  );
}
