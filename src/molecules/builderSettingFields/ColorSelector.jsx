import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { SketchPicker, ChromePicker } from "react-color";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { v4 as uuidv4 } from "uuid";

import { SettingField } from "../../atoms";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import classes from "./.module.scss";
import { useCallback } from "react";

function RGBAToHexA(r, g, b, a) {
  r = r?.toString(16);
  g = g?.toString(16);
  b = b?.toString(16);
  a = Math.round(a * 255)?.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;
  if (a.length == 1) a = "0" + a;

  return "#" + r + g + b + a;
}

function convertRGBToHex(reactColorEvent) {
  const { r, g, b, a } = reactColorEvent.rgb;

  return RGBAToHexA(r, g, b, a);
}

export function ColorSelector({ module, name, title, value = "#000000" }) {
  const [open, setOpen] = useState();
  const [internalValue, setInternalValue] = useState();

  // this was used for native color input
  const randomId = uuidv4();
  const colorInputId = `input-color-${randomId}`;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = convertRGBToHex(e);
    dispatch(updatePageComponents({ module, key: name, value }));
  };

  const handleInternalChange = (e) => {
    const value = convertRGBToHex(e);
    setInternalValue(value);
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
