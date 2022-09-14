import { useDrag, useDrop } from "react-dnd";

import classes from "./Card.module.scss";

export function Card({
  children,
  background,
  title = { text: "", hoverColor: "inherit" },
  hover = false,
}) {
  const hoverStyle = {
    filter: "drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.33))",
    background: background.hoverColor,
    border: background.hoverColor,
    scale: "103%",
    transition: "all 0.2s ease 0s",
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: "div",
    // data of the item to be available to the drop methods
    item: { title: title.text },
    // method to collect additional data for drop handling like whether is currently being dragged
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging(),
      };
    },
  }));

  return (
    <div
      ref={drag}
      className={classes.componentCard}
      style={hover ? hoverStyle : {}}
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
