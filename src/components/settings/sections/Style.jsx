import CustomAutocomplete from "../../autoComplete/CustomAutocomplete";
import classes from "./styles.module.scss";

export function Style() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>STYLE</p>
      <div className={classes.singleAttribute}>
        <p>Font Family</p>
        <CustomAutocomplete defaultValue="Choose a Font" />
      </div>
    </div>
  );
}
