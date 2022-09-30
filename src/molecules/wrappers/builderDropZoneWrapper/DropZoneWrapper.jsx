import { useRef, useEffect, cloneElement } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import {
  removeComponentFromPage,
  setPageComponents,
  setSelectedPageComponentName,
} from "../../../pages/builder/builderSlice";
import componentsData from "../../../data/componentsData";
import * as builderComponents from "../../builderComponents";
import { ComponentEditWrapper } from "../../builderComponents";
import {
  getIndexes,
  numerateTheName,
  removeDigitsAndReturnComponentName,
} from "../../helpers/builder";
import { useAddComponentToPageBuilder } from "../../../hooks";
import { forwardRef } from "react";

function canElementDropTop(element, mouseYPosition) {
  const clientRects = element.getClientRects();
  const elTop = clientRects[0].top;

  const elHeight = element.offsetHeight;

  // console.log(elTop, elHeight, pointerY);

  return mouseYPosition <= elTop + elHeight / 2;
}

export function DropZoneWrapper({ moduleContent, children }) {
  const dispatch = useDispatch();
  const refForHookAccess = useRef();

  const { addComponentToPageBuilder } = useAddComponentToPageBuilder();

  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const [{ isOver }, drop] = useDrop({
    accept: componentsData.types.BUILDER_COMPONENT,
    hover: (item, monitor) => {
      if (
        refForHookAccess.current.className.includes(
          componentsData.BLANK_COMPONENT_NAME
        )
      )
        return;
      // console.log("hovering");

      const canDropTop = canElementDropTop(
        refForHookAccess.current,
        monitor.getClientOffset().y
      );

      const { componentIndex, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent.name,
        componentsData.BLANK_COMPONENT_NAME
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
        name: componentsData.BLANK_COMPONENT_NAME,
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

  return cloneElement(children, {
    ref: (el) => {
      drop(el);
      refForHookAccess.current = el;
    },
  });
}
