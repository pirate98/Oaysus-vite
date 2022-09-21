import { Input } from "./Input";
import classes from "./.module.scss";
import { inputWidth } from "../../assets/css/_variables.module.scss";
import { useState } from "react";

export function PxInput({ placeholder, small = false, ...args }) {
  const [value, setValue] = useState(args.value);

  const keyUpHandler = (e) => {
    // 38 up 40 down
    console.log({ e: e.keyCode });
    const { keyCode } = e;

    let _value = parseInt(value);

    if (keyCode === 38) {
      _value++;
    } else if (keyCode === 40) {
      _value--;
    }

    setValue(_value.toString());
  };

  const handleChange = (e) => {
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
      onKeyUp={keyUpHandler}
      value={value}
      onChange={handleChange}
    />
  );
}
