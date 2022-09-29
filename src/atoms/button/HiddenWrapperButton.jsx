import classes from "../../assets/css/_classes.module.scss";

export function HiddenWrapperButton({
  children,
  onClick,
  className = "",
  fullWidth = false,
  ...args
}) {
  return (
    <button
      {...args}
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
