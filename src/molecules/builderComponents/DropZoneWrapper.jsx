import { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import {
  removeComponentFromPage,
  setPageComponents,
} from "../../pages/builder/builderSlice";
import dragDrop from "../../data/dragDrop";
import * as builderComponents from "../../molecules/builderComponents";
import { FormWrapper } from "../../molecules/builderComponents";
import {
  getIndexes,
  numerateTheName,
  removeDigitsAndReturnComponentName,
} from "../helpers/builder";

export function DropZoneWrapper({ moduleContent }) {
  const dispatch = useDispatch();
  const refForInnerAccess = useRef();

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
      // console.log({ canDropTop, blankComponentIndex, hoveredComponentIndex });

      if (
        (canDropTop && blankComponentIndex === hoveredComponentIndex - 1) ||
        (!canDropTop && blankComponentIndex === hoveredComponentIndex + 1)
      )
        return;

      let newPage = [...pageComponents];
      let dropIndex = hoveredComponentIndex;

      if (blankComponentIndex === undefined) {
        dropIndex++;
      } else {
        // Remove empty component.
        // dropIndex automatically targets the emptied position
        newPage.splice(blankComponentIndex, 1);
      }

      if (canDropTop) dropIndex = Math.max(dropIndex - 1, 0);
      // console.log({ dropIndex });

      newPage.splice(dropIndex, 0, {
        name: dragDrop.BLANK_COMPONENT_NAME,
      });

      dispatch(setPageComponents(newPage));
    },
    drop: (item, monitor) => {
      console.log({ item, monitor }, moduleContent.name);

      const { undefined, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent,
        dragDrop.BLANK_COMPONENT_NAME
      );

      let newPage = [...pageComponents];

      const numerizedName = numerateTheName(newPage, item.name);

      newPage.splice(blankComponentIndex, 1, {
        name: numerizedName,
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

  return (
    <FormWrapper name={moduleContent.name}>
      <DynamicComponent
        content={moduleContent}
        ref={(el) => {
          drop(el);
          refForInnerAccess.current = el;
        }}
      />
    </FormWrapper>
  );
}
