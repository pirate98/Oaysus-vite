import classes from "./SettingsProgressBar.module.scss";

export function SettingsProgressBar() {
  return (
    <div className={classes.container}>
      <span className={classes.dotSpan}></span>
      <span className={classes.dotSpan2}></span>
    </div>
  );
}
