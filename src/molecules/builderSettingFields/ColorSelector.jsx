import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { SketchPicker, ChromePicker } from "react-color";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { v4 as uuidv4 } from "uuid";

import { SettingField } from "../../atoms";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./.module.scss";
import { useCallback } from "react";

export function ColorSelector({ module, name, title, value = "#000000" }) {
  const [open, setOpen] = useState();
  const [internalValue, setInternalValue] = useState();

  // this was used for native color input
  const randomId = uuidv4();
  const colorInputId = `input-color-${randomId}`;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e);
    const { hex } = e;
    dispatch(updatePageComponents({ module, key: name, value: hex }));
  };

  const handleInternalChange = ({ hex }) => {
    setInternalValue(hex);
  };

  useEffect(() => setInternalValue(value), [value]);

  return (
    <SettingField fieldName={title}>
      <div className={classes.colorInputContainer}>
        <label
          id="colorPickerLabel"
          htmlFor={colorInputId}
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
          // onChange={handleTextChange}
        />
        <ClickAwayListener
          onClickAway={(e) => {
            setOpen(false);
          }}
        >
          <div>
            <ChromePicker
              id={colorInputId}
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
