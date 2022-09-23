import classes from "./settingFieldContainer.module.scss";

export function settingFieldContainer({ title = "", children, className }) {
  return (
    <div className={classes.container + (className ? ` ${className}` : "")}>
      {title && title.length ? <p className={classes.title}>{title}</p> : ""}
      {children}
    </div>
  );
}
