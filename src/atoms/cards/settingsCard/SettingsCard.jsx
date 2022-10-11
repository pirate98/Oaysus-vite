import classes from "./SettingsCard.module.scss";

export function SettingsCard({ className, children, ...props }) {
  return (
    <div
      className={classes.card + (className ? " " + className : "")}
      {...props}
    >
      {children}
    </div>
  );
}
