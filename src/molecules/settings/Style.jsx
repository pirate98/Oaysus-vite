import { CustomAutocomplete, Input } from "../../atoms";
import classes from "./styles.module.scss";

export function Style() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>STYLE</p>
      <div className={classes.singleAttribute}>
        <p>Font Family</p>
        <CustomAutocomplete placeholder="Choose a font" />
      </div>
      <div className={classes.singleAttribute}>
        <p>Line Height</p>
        <Input
          endAdornment={<p className={classes.px}>px</p>}
          placeholder="Enter size"
        />
      </div>
      <div className={classes.singleAttribute}>
        <p>Font Size</p>
        <Input
          endAdornment={<p className={classes.px}>px</p>}
          placeholder="Enter size"
        />
      </div>
      <div className={classes.singleAttribute}>
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
