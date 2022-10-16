import { useState, ChangeEvent, KeyboardEventHandler } from "react";

import { Input, OaysusInputProps } from "@/atoms/inputs/Input";
import classes from "./InputWithKeyControls.module.scss";

type Props = {
  placeholder?: string;
  endAdornment?: string;
  value?: string;
} & OaysusInputProps;

export function InputWithKeyControls({
  placeholder,
  endAdornment,
  ...args
}: Props) {
  const [value, setValue] = useState(args.value || "");

  const keysToPrevent = ["ArrowUp", "ArrowDown"];

  const handleKeyDown: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    if (keysToPrevent.includes(e.key)) e.preventDefault();
  };

  const keyUpHandler: KeyboardEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { key } = e;

    if (keysToPrevent.includes(key)) {
      let numVal = parseInt(value) || 0;
      numVal = key === "ArrowUp" ? numVal + 1 : numVal - 1;

      setValue(numVal.toString());
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
