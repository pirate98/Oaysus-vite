import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import classes from "./.module.scss";

export function ColorSelector({ name, title, defaultValue = "#000000" }) {
  const [value, setValue] = useState(defaultValue);

  const randomId = uuidv4();
  const colorInputId = `input-color-${randomId}`;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <div className={classes.colorInputContainer}>
        <label htmlFor={colorInputId}>
          <span
            className={classes.colorPicker}
            style={{ backgroundColor: value }}
          ></span>
        </label>
        <input
          className={classes.input}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
        <input
          name={name}
          id={colorInputId}
          type="color"
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          className={classes.inputColor}
        />
      </div>
    </div>
  );
}
