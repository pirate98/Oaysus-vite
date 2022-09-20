import { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import {
  removeComponentFromPage,
  setPageComponents,
} from "../../pages/builder/builderSlice";
import dragDrop from "../../data/dragDrop";
import * as builderComponents from "../../molecules/builderComponents";
import {
  getIndexes,
  removeDigitsAndReturnComponentName,
} from "../helpers/builder";

const BLANK_COMPONENT_NAME = "blank";

export function DropZoneWrapper({ moduleContent }) {
  const dispatch = useDispatch();
  const refForInnerAccess = useRef();

  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const [{ isOver, clientOffset, difference }, drop] = useDrop({
    accept: dragDrop.types.BUILDER_COMPONENT,
    hover: (item, monitor) => {
      // REFACTOR THIS LATER
      if (refForInnerAccess.current.className.includes(BLANK_COMPONENT_NAME))
        return;

      const elTop = refForInnerAccess.current.offsetTop;
      const elHeight = refForInnerAccess.current.offsetHeight;

      const pointerY = monitor.getClientOffset().y;
      console.log(elTop, elHeight, pointerY);
      const canDropTop = pointerY <= elTop + elHeight / 2;

      const { hoveredComponentIndex, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent,
        BLANK_COMPONENT_NAME
      );
      console.log({ canDropTop, blankComponentIndex, hoveredComponentIndex });

      if (
        (canDropTop && blankComponentIndex === hoveredComponentIndex - 1) ||
        (!canDropTop && blankComponentIndex === hoveredComponentIndex + 1)
      )
        return;

      let newPage = [...pageComponents];

      // Remove empty component
      if (blankComponentIndex !== undefined) {
        newPage.splice(blankComponentIndex, 1);
      }

      let dropPosition =
        hoveredComponentIndex + (blankComponentIndex === undefined ? 1 : 0);

      if (canDropTop) dropPosition = Math.max(dropPosition - 1, 0);
      console.log({ dropPosition });

      newPage.splice(dropPosition, 0, {
        name: BLANK_COMPONENT_NAME,
      });

      dispatch(setPageComponents(newPage));
    },
    drop: (item, monitor) => {
      console.log({ item, monitor }, moduleContent.name);

      const componentName = item.name.toLowerCase();

      const { undefined, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent,
        BLANK_COMPONENT_NAME
      );

      let newPage = [...pageComponents];

      newPage.splice(blankComponentIndex, 1, {
        name: componentName,
      });
      // console.log({ newPage });
      dispatch(setPageComponents(newPage));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      clientOffset: !!monitor.getClientOffset(),
      difference: monitor.getDifferenceFromInitialOffset(),
    }),
  });

  // Remove blank component when mouse pointer leaves drop zone
  useEffect(() => {
    if (isOver)
      return () => {
        console.log("removing");
        // dispatch(removeComponentFromPage(BLANK_COMPONENT_NAME));
      };
  }, [isOver]);

  const DynamicComponentName =
    builderComponents[removeDigitsAndReturnComponentName(moduleContent.name)];

  return (
    <DynamicComponentName
      content={moduleContent}
      ref={(el) => {
        drop(el);
        refForInnerAccess.current = el;
      }}
    />
  );
}
