import classes from "../../assets/css/_classes.module.scss";

export function CleanButton({
  children,
  onClick,
  className = "",
  fullWidth = false,
}) {
  return (
    <button
      onClick={onClick}
      className={
        classes.btnClean +
        (className ? ` ${className}` : "") +
        (fullWidth ? ` ${classes.w100}` : "")
      }
    >
      {children}
    </button>
  );
}
