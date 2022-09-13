import classes from "./Card.module.scss";

export function Card({ children, title = { text: "", color: "inherit" } }) {
  return (
    <div className={classes.componentCard}>
      {children}
      <p style={{ color: title.color }} className={classes.h4}>
        {title.text}
      </p>
    </div>
  );
}
