import classes from "../../assets/css/_classes.module.scss";

export function CleanButton({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={classes.btnClean + (className ? ` ${className}` : "")}
    >
      {children}
    </button>
  );
}
