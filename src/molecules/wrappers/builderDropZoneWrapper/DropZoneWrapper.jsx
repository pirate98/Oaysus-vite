import { useRef, useEffect, cloneElement } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { setPageComponents } from "../../../pages/builder/builderSlice";
import componentsData from "../../../data/componentsData";
import { getIndexes, numerateTheName } from "../../helpers/builder";
import * as builderComponents from "../../builderComponents";
// import { useAddComponentToPageBuilder } from "../../../hooks";

function canElementDropTop(element, mouseYPosition) {
  const clientRects = element.getClientRects();
  const elTop = clientRects[0].top;

  const elHeight = element.offsetHeight;

  // console.log(elTop, elHeight, pointerY);

  return mouseYPosition <= elTop + elHeight / 2;
}

export function DropZoneWrapper({ moduleContent, children, className }) {
  const dispatch = useDispatch();
  const refForHookAccess = useRef();

  // const { addComponentToPageBuilder } = useAddComponentToPageBuilder();

  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const moveComponent = (componentName) => {
    if (!componentName) return;

    const { componentIndex, blankComponentIndex } = getIndexes(
      pageComponents,
      componentName,
      componentsData.BLANK_COMPONENT_NAME
    );

    const mutablePageComponents = [...pageComponents];

    const component = mutablePageComponents.splice(componentIndex, 1);

    mutablePageComponents.splice(blankComponentIndex, 1, component[0]);

    dispatch(setPageComponents(mutablePageComponents));
  };

  const addComponentToPageBuilder = (componentName) => {
    if (!componentName) return;

    const { undefined, blankComponentIndex } = getIndexes(
      pageComponents,
      null,
      componentsData.BLANK_COMPONENT_NAME
    );

    let newPage = [...pageComponents];
    // console.log(builderComponents["Incentive1"].json);
    const numerizedName = numerateTheName(newPage, componentName);

    newPage.splice(blankComponentIndex, 1, {
      ...builderComponents[componentName].json,
      name: numerizedName,
    });
    // console.log({ newPage });
    dispatch(setPageComponents(newPage));
    // await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const [{ isOver }, drop] = useDrop({
    accept: [
      componentsData.types.BUILDER_COMPONENT,
      componentsData.types.BUILDER_COMPONENT_TOOLBAR,
    ],
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
      if (item.type === componentsData.types.BUILDER_COMPONENT_TOOLBAR) {
        moveComponent(item?.name);
        return;
      }

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
  console.log(children.props);
  return cloneElement(children, {
    className: children.props.className + (className ? ` ${className}` : ""),
    ref: (el) => {
      drop(el);
      refForHookAccess.current = el;
    },
  });
}
