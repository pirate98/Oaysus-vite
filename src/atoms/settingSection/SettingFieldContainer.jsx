import classes from "./SettingFieldContainer.module.scss";

export function SettingFieldContainer({ title, children }) {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      {children}
    </div>
  );
}
