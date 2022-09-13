import classes from "./Card.module.scss";

export function Card({
  children,
  background,
  title = { text: "", hoverColor: "inherit" },
  hover = false,
}) {
  return (
    <div
      className={classes.componentCard}
      style={{ background: hover ? background.hoverColor : "inherit" }}
    >
      {children}
      <p
        style={{ color: hover ? title.hoverColor : undefined }}
        className={classes.h4}
      >
        {title.text}
      </p>
    </div>
  );
}
