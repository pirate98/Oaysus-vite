import { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import {
  removeComponentFromPage,
  setPageComponents,
  setSelectedPageComponentName,
} from "../../../pages/builder/builderSlice";
import dragDrop from "../../../data/dragDrop";
import * as builderComponents from "../../builderComponents";
import { ComponentEditWrapper } from "../../builderComponents";
import {
  getIndexes,
  numerateTheName,
  removeDigitsAndReturnComponentName,
} from "../../helpers/builder";
import { useAddComponentToPageBuilder } from "../../../hooks";

function canElementDropTop(element, mouseYPosition) {
  const clientRects = element.getClientRects();
  const elTop = clientRects[0].top;

  const elHeight = element.offsetHeight;

  // console.log(elTop, elHeight, pointerY);

  return mouseYPosition <= elTop + elHeight / 2;
}

export function DropZoneWrapper({ moduleContent }) {
  const dispatch = useDispatch();
  const refForInnerAccess = useRef();

  const { addComponentToPageBuilder } = useAddComponentToPageBuilder();

  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const [{ isOver }, drop] = useDrop({
    accept: dragDrop.types.BUILDER_COMPONENT,
    hover: (item, monitor) => {
      if (
        refForInnerAccess.current.className.includes(
          dragDrop.BLANK_COMPONENT_NAME
        )
      )
        return;
      // console.log("hovering");

      const canDropTop = canElementDropTop(
        refForInnerAccess.current,
        monitor.getClientOffset().y
      );

      const { componentIndex, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent.name,
        dragDrop.BLANK_COMPONENT_NAME
      );
      // console.log({ canDropTop, blankComponentIndex, componentIndex });

      if (
        (canDropTop && blankComponentIndex === componentIndex - 1) ||
        (!canDropTop && blankComponentIndex === componentIndex + 1)
      )
        return;

      let newPage = [...pageComponents];
      let dropIndex = componentIndex;

      if (blankComponentIndex === undefined) {
        dropIndex++; // drop after hovered component
      } else {
        // Remove empty component.
        // dropIndex automatically targets hoveredIndex + 1
        newPage.splice(blankComponentIndex, 1);
      }

      if (canDropTop) dropIndex = componentIndex;
      // console.log({ dropIndex });

      newPage.splice(dropIndex, 0, {
        name: dragDrop.BLANK_COMPONENT_NAME,
      });

      dispatch(setPageComponents(newPage));
    },
    drop: (item, monitor) => {
      addComponentToPageBuilder(item?.name);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  useEffect(() => {
    if (isOver)
      return () => {
        console.log("removing");
      };
  }, [isOver]);

  // console.log(removeDigitsAndReturnComponentName(moduleContent.name));
  const DynamicComponent =
    builderComponents[removeDigitsAndReturnComponentName(moduleContent.name)];

  return (
    <DynamicComponent
      content={moduleContent}
      ref={(el) => {
        drop(el);
        refForInnerAccess.current = el;
      }}
    />
  );
}
