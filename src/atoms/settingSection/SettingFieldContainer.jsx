import classes from "./SettingFieldContainer.module.scss";

export function SettingFieldContainer({ title = "", children, className }) {
  return (
    <div className={classes.container + (className ? ` ${className}` : "")}>
      {title && title.length ? <p className={classes.title}>{title}</p> : ""}
      {children}
    </div>
  );
}
