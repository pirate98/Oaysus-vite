import { useEffect } from "react";

import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

import classes from "./.module.scss";
import componentsData from "@/data/componentsData";
import {
  removeComponentFromPage,
  setPageComponents,
} from "@/pages/builder/builderSlice";
import { RootState } from "../../../../data/store";

interface Props {
  children?: React.ReactNode;
  title: Record<"text" | "hoverColor", string>;
  hover?: boolean;
}

export function BuilderButtonWrapper({
  children,
  title = { text: "", hoverColor: "inherit" },
  hover = false,
}: Props) {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents },
  } = useSelector((state: RootState) => state);
  // console.log({ title: title.text });
  const [{ isDragging }, drag] = useDrag(() => ({
    // what type of item this to determine if a drop target accepts it
    type: componentsData.types.BUILDER_COMPONENT,
    // data of the item to be available to the drop methods
    item: { name: title.text },
    // method to collect additional data for drop handling like whether is currently being dragged
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
    end: (item, monitor) => {
      const didDrop = monitor.didDrop();

      if (didDrop) return;

      const contentWithoutPlaceHolder = pageComponents?.filter(
        (item: Item) => item.id !== PLACEHOLDER_ID
      );

      dispatch(setPageComponents(contentWithoutPlaceHolder));
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
        {title?.text}
      </p>
    </div>
  );
}
