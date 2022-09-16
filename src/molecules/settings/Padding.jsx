import classes from "./.module.scss";
import { Distances } from "../settingFields/Distances";

export function Padding() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>PADDING</p>
      <Distances />
    </div>
  );
}
