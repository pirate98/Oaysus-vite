import classes from "./.module.scss";
import { Distances } from "../settingFields/Distances";

export function Margin() {
  return (
    <div className={classes.container}>
      <p className={classes.title}>MARGIN</p>
      <Distances />
    </div>
  );
}
