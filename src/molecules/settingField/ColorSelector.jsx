import { useState } from "react";

import classes from "./.module.scss";

export function ColorSelector({ title, defaultValue = "#000000" }) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <div className={classes.colorInputContainer}>
        <label htmlFor="input-color">
          <span
            className={classes.colorPicker}
            style={{ backgroundColor: value }}
          ></span>
        </label>
        <input
          className={classes.input}
          value={value}
          onChange={handleChange}
        />
        <input
          id="input-color"
          type="color"
          value={value}
          onChange={handleChange}
          className={classes.inputColor}
        />
      </div>
    </div>
  );
}
