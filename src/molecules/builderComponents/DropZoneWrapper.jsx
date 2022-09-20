import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { setPageComponents } from "../../pages/builder/builderSlice";
import dragDrop from "../../data/dragDrop";
import * as builderComponents from "../../molecules/builderComponents";
import {
  getIndexes,
  removeDigitsAndReturnComponentName,
} from "../helpers/builder";

const BLANK_COMPONENT_NAME = "blank";

export function DropZoneWrapper({ moduleContent }) {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const [{ isOver }, drop] = useDrop({
    accept: dragDrop.types.BUILDER_COMPONENT,
    hover: (item, monitor) => {
      // console.log({ item, monitor });

      const { hoveredComponentIndex, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent,
        BLANK_COMPONENT_NAME
      );
      console.log({ blankComponentIndex, hoveredComponentIndex });

      if (blankComponentIndex === hoveredComponentIndex + 1) return;

      let newPage = [...pageComponents];

      if (blankComponentIndex !== undefined) {
        newPage.splice(blankComponentIndex, 1);
      }

      newPage.splice(
        hoveredComponentIndex + (blankComponentIndex === undefined ? 1 : 0),
        0,
        {
          name: BLANK_COMPONENT_NAME,
        }
      );

      dispatch(setPageComponents(newPage));
    },
    drop: (item, monitor) => {
      console.log({ item, monitor });
      console.log(moduleContent.name);
      const componentName = item.name.toLowerCase();

      const { undefined, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent,
        BLANK_COMPONENT_NAME
      );

      let newPage = [...pageComponents];

      // if (blankComponentIndex !== undefined) {
      //   newPage.splice(blankComponentIndex, 1);
      // }

      newPage.splice(blankComponentIndex, 1, {
        name: componentName,
      });
      // console.log({ newPage });
      dispatch(setPageComponents(newPage));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  // Remove blank component when mouse pointer leaves drop zone
  useEffect(() => {
    const pageComponentsWithoutBlankComponent = pageComponents.filter(
      (comp) => comp.name !== BLANK_COMPONENT_NAME
    );

    if (isOver)
      return () =>
        dispatch(setPageComponents(pageComponentsWithoutBlankComponent));
  }, [isOver]);

  const DynamicComponentName =
    builderComponents[removeDigitsAndReturnComponentName(moduleContent.name)];

  return <DynamicComponentName content={moduleContent} ref={drop} />;
}
