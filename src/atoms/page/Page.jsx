import classes from "./.module.scss";

export function Page({ children }) {
  return <div className={classes.page}>{children}</div>;
}
