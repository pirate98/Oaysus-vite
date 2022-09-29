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
      const clientRects = refForInnerAccess.current.getClientRects();
      const elTop = clientRects[0].top;

      const elHeight = refForInnerAccess.current.offsetHeight;

      const pointerY = monitor.getClientOffset().y;
      // console.log(elTop, elHeight, pointerY);
      const canDropTop = pointerY <= elTop + elHeight / 2;

      const { hoveredComponentIndex, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent,
        dragDrop.BLANK_COMPONENT_NAME
      );
      console.log({ canDropTop, blankComponentIndex, hoveredComponentIndex });

      if (
        (canDropTop && blankComponentIndex === hoveredComponentIndex - 1) ||
        (!canDropTop && blankComponentIndex === hoveredComponentIndex + 1)
      )
        return;

      let newPage = [...pageComponents];
      let dropIndex = hoveredComponentIndex;

      if (blankComponentIndex === undefined) {
        dropIndex++; // drop after hovered component
      } else {
        // Remove empty component.
        // dropIndex automatically targets hoveredIndex + 1
        newPage.splice(blankComponentIndex, 1);
      }

      if (canDropTop) dropIndex = hoveredComponentIndex;
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

  // Remove blank component when mouse pointer leaves drop zone
  useEffect(() => {
    if (isOver)
      return () => {
        // console.log("removing");
        // dispatch(removeComponentFromPage(BLANK_COMPONENT_NAME));
      };
  }, [isOver]);

  // console.log(removeDigitsAndReturnComponentName(moduleContent.name));
  const DynamicComponent =
    builderComponents[removeDigitsAndReturnComponentName(moduleContent.name)];
  // console.log({ DynamicComponent });
  const clickHandler = () => {
    dispatch(setSelectedPageComponentName(moduleContent.name));
  };

  return (
    // <ComponentEditWrapper componentName={moduleContent.name}>
    <section onClick={clickHandler}>
      <DynamicComponent
        content={moduleContent}
        ref={(el) => {
          drop(el);
          refForInnerAccess.current = el;
        }}
      />
    </section>
    // </ComponentEditWrapper>
  );
}
