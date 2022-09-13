import classes from "./Card.module.scss";

export function Card({
  children,
  background,
  title = { text: "", color: "inherit" },
}) {
  return (
    <div className={classes.componentCard} style={{ background }}>
      {children}
      <p style={{ color: title.color }} className={classes.h4}>
        {title.text}
      </p>
    </div>
  );
}
