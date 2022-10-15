import { ChangeEvent, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { SketchPicker, ChromePicker } from "react-color";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { v4 as uuidv4 } from "uuid";

import { SettingField } from "@/atoms";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import classes from "./.module.scss";
import { BuilderModule } from "@/types/BuilderModule.type";
import { convertRGBToHex } from "@/helpers";

interface Props {
  module: BuilderModule;
  name?: string;
  title?: string;
  value?: string;
}

export function ColorSelector({
  module,
  name,
  title,
  value = "#000000",
}: Props) {
  const [open, setOpen] = useState<boolean>();
  const [internalValue, setInternalValue] = useState<string>();

  // this was used for native color input
  const randomId = uuidv4();
  // const colorInputId = `input-color-${randomId}`;

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const value = convertRGBToHex(e);
    dispatch(updatePageComponents({ module, key: name, value }));
  };

  const handleInternalChange = (e: any) => {
    const value = convertRGBToHex(e);
    setInternalValue(value);
  };

  const handleTextChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(target);
    const { value } = target;
    dispatch(updatePageComponents({ module, key: name, value }));
  };

  useEffect(() => setInternalValue(value), [value]);

  return (
    <SettingField fieldName={title}>
      <div className={classes.colorInputContainer}>
        <label
          id="colorPickerLabel"
          // htmlFor={colorInputId}
          onClickCapture={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span
            className={classes.colorPicker}
            style={{ backgroundColor: internalValue }}
          ></span>
        </label>
        <input
          name={name}
          className={classes.input}
          value={value}
          onChange={handleTextChange}
        />
        <ClickAwayListener
          onClickAway={(e) => {
            setOpen(false);
          }}
        >
          <div>
            <ChromePicker
              // id={colorInputId}
              className={open ? classes.inputColorActive : classes.inputColor}
              color={internalValue}
              onChangeComplete={handleChange}
              onChange={handleInternalChange}
            />
          </div>
        </ClickAwayListener>
        {/* <input
          name={name}
          id={colorInputId}
          type="color"
          // value={value}
          value={defaultValue}
          onMouseUp={handleBlur}
          onChange={handleChange}
          className={classes.inputColor}
        /> */}
      </div>
    </SettingField>
  );
}
