import classes from "./SettingField.module.scss";

export function SettingField({ children, fieldName, ...rest }) {
  return (
    <div className={classes.singleAttribute} {...rest}>
      <p>{fieldName}</p>
      {children}
    </div>
  );
}
