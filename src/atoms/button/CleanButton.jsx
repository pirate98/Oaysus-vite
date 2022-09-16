import classes from "../../assets/css/_classes.module.scss";

export function CleanButton({ children }) {
  return <button className={classes.btnClean}>{children}</button>;
}
