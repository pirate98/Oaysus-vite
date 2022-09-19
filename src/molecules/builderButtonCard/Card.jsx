import { useEffect } from "react";

import { useDrag } from "react-dnd";

import classes from "./Card.module.scss";
import dragDrop from "../../data/dragDrop";

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
    transition: "all 0.1s ease 0s",
  };

  const [{ isDragging, extraProps }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: dragDrop.types.BUILDER_COMPONENT,
    // data of the item to be available to the drop methods
    item: { name: title.text },
    // method to collect additional data for drop handling like whether is currently being dragged
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  }));

  useEffect(() => {
    // console.log({ isDragging });
  }, [isDragging]);

  return (
    <div
      ref={(el) => {
        drag(el);
      }}
      className={classes.componentCard}
      style={
        isDragging ? { ...hoverStyle, opacity: 0.5 } : hover ? hoverStyle : {}
      }
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
