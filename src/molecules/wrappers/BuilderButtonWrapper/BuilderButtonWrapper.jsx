import { useEffect } from "react";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

import classes from "./.module.scss";
import dragDrop from "../../../data/dragDrop";
import { removeComponentFromPage } from "../../../pages/builder/builderSlice";

export function BuilderButtonWrapper({
  children,
  title = { text: "", hoverColor: "inherit" },
  hover = false,
}) {
  const dispatch = useDispatch();

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
    end: (monitor) => {
      // console.log({ monitor });
      dispatch(removeComponentFromPage(dragDrop.BLANK_COMPONENT_NAME));
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
      className={
        classes.componentCard +
        " " +
        (isDragging ? classes.drag : hover ? classes.hover : "")
      }
    >
      {children}
      <p
        style={{ color: hover ? title?.hoverColor : "unset" }}
        className={classes.h4}
      >
        {title?.title}
      </p>
    </div>
  );
}
