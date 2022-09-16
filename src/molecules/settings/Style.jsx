import { CustomAutocomplete, PxInput } from "../../atoms";
import classes from "./.module.scss";
import fieldClasses from "../settingFields/.module.scss";

export function Style() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>STYLE</p>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Family</p>
        <CustomAutocomplete placeholder="Choose a font" />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Line Height</p>
        <PxInput placeholder="Enter size" />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Size</p>
        <PxInput placeholder="Enter size" />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Color</p>
        <div className={classes.inputContainer}>
          <label htmlFor="input-color">
            <span className={classes.colorPicker}></span>
          </label>
          <input className={classes.input}></input>
          <input id="input-color" type="color" className={classes.inputColor} />
        </div>
      </div>
    </div>
  );
}
