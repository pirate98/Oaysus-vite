import { CustomAutocomplete } from "../../atoms";
import classes from "./styles.module.scss";

export function Style() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>STYLE</p>
      <div className={classes.singleAttribute}>
        <p>Font Family</p>
        <CustomAutocomplete defaultValue="Choose a Font" />
      </div>
      <div className={classes.singleAttribute}>
        <p>Line Height</p>
        <CustomAutocomplete defaultValue="Choose a Font" />
      </div>
      <div className={classes.singleAttribute}>
        <p>Font Size</p>
        <CustomAutocomplete defaultValue="Choose a Font" />
      </div>
      <div className={classes.singleAttribute}>
        <p>Font Color</p>
      </div>
    </div>
  );
}
