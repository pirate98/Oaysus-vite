import classes from "./SettingsCard.module.scss";

export function SettingsCard({ children }) {
  return <div className={classes.card}>{children}</div>;
}
