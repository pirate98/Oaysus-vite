import classes from "./SettingFieldContainer.module.scss";

export function SettingFieldContainer({ title, children }) {
  return (
    <div className={classes.container}>
      {title.length ? <p className={classes.title}>{title}</p> : ""}
      {children}
    </div>
  );
}
