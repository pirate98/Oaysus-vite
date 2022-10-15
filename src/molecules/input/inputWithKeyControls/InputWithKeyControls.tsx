import { useState, useEffect, InputHTMLAttributes, ChangeEvent } from "react";

import { Input } from "@/atoms/inputs/Input";
import classes from "./InputWithKeyControls.module.scss";

type Props = {
  placeholder?: string;
  endAdornment?: string;
  value?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithKeyControls({
  placeholder,
  endAdornment,
  ...args
}: Props) {
  const [value, setValue] = useState(args.value || "");

  const keysToPrevent = ["ArrowUp", "ArrowDown"];

  const handleKeyDown = (e: KeyboardEvent) => {
    if (keysToPrevent.includes(e.key)) e.preventDefault();
  };

  const keyUpHandler = (e: KeyboardEvent) => {
    const { key } = e;
    // console.log({ key });

    if (keysToPrevent.includes(key)) {
      let numVal = parseInt(value) || 0;
      numVal = key === "ArrowUp" ? numVal + 1 : numVal - 1;

      setValue(numVal.toString());
    }
  };

  // useEffect(() => {
  //   setValue(args.value || "");
  // }, [args]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <Input
      {...args}
      endAdornment={<p className={classes.end}>{endAdornment}</p>}
      placeholder={placeholder || (!value?.length ? "0" : "")}
      onKeyDown={handleKeyDown}
      onKeyUp={keyUpHandler}
      value={value}
      onChange={handleChange}
    />
  );
}
