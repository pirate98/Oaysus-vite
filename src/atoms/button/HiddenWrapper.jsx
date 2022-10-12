import classes from "@/assets/css/_classes.module.scss";

export function HiddenWrapper({
  children,
  className = "",
  fullWidth = false,
  ...args
}) {
  return (
    <button
      {...args}
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
