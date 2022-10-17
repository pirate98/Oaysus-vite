import {
  useRef,
  useEffect,
  cloneElement,
  ReactElement,
  JSXElementConstructor,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { setPageComponents } from "@/pages/builder/builderSlice";
import componentsData from "@/data/componentsData";
import { numerateTheName } from "@/helpers/builder";
import { getIndexes } from "@/helpers";
import * as builderComponents from "../../builderComponents";
const _builderComponents: Record<any, any> = builderComponents;
import { RootState } from "@/data/store";
// import { useAddComponentToPageBuilder } from "@/hooks";

function canElementDropTop(element: any, mouseYPosition: number | undefined) {
  if (!mouseYPosition) return;

  const clientRects = element.getClientRects();
  const elTop = clientRects[0].top;

  const elHeight = element.offsetHeight;

  // console.log(elTop, elHeight, pointerY);

  return mouseYPosition <= elTop + elHeight / 2;
}

interface Props {
  moduleContent?: Record<any, any>;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  className?: string;
}

export function DropZoneWrapper({ moduleContent, children, className }: Props) {
  const dispatch = useDispatch();
  const refForHookAccess = useRef<HTMLElement>();

  // const { addComponentToPageBuilder } = useAddComponentToPageBuilder();

  const {
    builder: { pageComponents },
  } = useSelector((state: RootState) => state);

  const moveComponent = (componentName: string) => {
    if (!componentName) return;

    const { componentIndex, blankComponentIndex } = getIndexes(
      pageComponents,
      componentName,
      componentsData.BLANK_COMPONENT_NAME
    );

    if (componentIndex === undefined || blankComponentIndex === undefined)
      return;

    const mutablePageComponents = [...pageComponents];

    const component = mutablePageComponents.splice(componentIndex, 1);

    mutablePageComponents.splice(blankComponentIndex, 1, component[0]);

    dispatch(setPageComponents(mutablePageComponents));
  };

  const addComponentToPageBuilder = (componentName: string) => {
    if (!componentName) return;

    const { componentIndex: _, blankComponentIndex } = getIndexes(
      pageComponents,
      undefined,
      componentsData.BLANK_COMPONENT_NAME
    );

    if (blankComponentIndex === undefined) return;

    let newPage = [...pageComponents];
    // console.log(builderComponents["Exclusive"].json);
    const numerizedName = numerateTheName(newPage, componentName);

    newPage.splice(blankComponentIndex, 1, {
      ..._builderComponents[componentName].json,
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
    hover: (item: any, monitor) => {
      if (
        refForHookAccess?.current?.className?.includes(
          componentsData.BLANK_COMPONENT_NAME
        )
      )
        return;
      // console.log("hovering");
      if (item?.name === moduleContent?.name) return; // prevent dropping on itself

      const canDropTop = canElementDropTop(
        refForHookAccess.current,
        monitor?.getClientOffset()?.y
      );

      const { componentIndex, blankComponentIndex } = getIndexes(
        pageComponents,
        moduleContent?.name,
        componentsData.BLANK_COMPONENT_NAME
      );
      // console.log({ canDropTop, blankComponentIndex, componentIndex });

      if (componentIndex === undefined) return;

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
        // console.log("removing");
      };
  }, [isOver]);
  // console.log(children.props);
  return cloneElement(children, {
    className: children.props.className + (className ? ` ${className}` : ""),
    ref: (el: HTMLElement) => {
      drop(el);
      refForHookAccess.current = el;
    },
  });
}
