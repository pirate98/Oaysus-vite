import {
  useEffect,
  useState,
  useRef,
  RefObject,
  MutableRefObject,
  useCallback,
  useContext,
} from "react";

import { AnyAction } from "@reduxjs/toolkit";
import {
  ConnectDragSource,
  ConnectDropTarget,
  useDrag,
  useDrop,
} from "react-dnd";
import { useDispatch } from "react-redux";

import { addComponentToBuilder, getIndex, isPointerAboveHalf } from "./helpers";
import { CONSTANT } from "@/data/constants";
import { useDebounceHandler } from "../../../hooks";
import { DndContext } from "../DropZoneDetectionProvider/DropZoneDetectionProvider";

const PLACEHOLDER_ID = CONSTANT.DND_PLACEHOLDER_ID;

interface Props {
  children: (
    drag: ConnectDragSource,
    drop: ConnectDropTarget,
    dropRefForArea: MutableRefObject<HTMLElement | undefined>
  ) => JSX.Element;
  id: number | string;
  extraDropTypesHandle?: (content: any, id: any) => void;
  content: any[];
  contentUpdateAction: (arr: any[]) => AnyAction;
}

type Item = Record<any, any>;

export function DragAndDrop({
  children,
  id,
  content,
  contentUpdateAction,
  extraDropTypesHandle,
}: // onDrop,
Props) {
  const context = useContext(DndContext);

  const { isOver: isOverProvider, type, extraDropTypes } = context;

  const dispatch = useDispatch();

  const removePlaceholder = () => {
    // console.log("removing placeholder");
    const contentWithoutPlaceHolder = content?.filter(
      (item: Item) => item.id !== PLACEHOLDER_ID
    );

    dispatch(contentUpdateAction(contentWithoutPlaceHolder));
  };

  const [{ isDragging }, drag, dragPreview] = useDrag(
    () => ({
      type,
      item: { id, type },
      end: (item, monitor) => {
        const didDrop = monitor.didDrop();

        if (!didDrop) removePlaceholder();
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [content]
  );

  useEffect(() => {
    if (isDragging && !isOverProvider) removePlaceholder();
  }, [isOverProvider]);

  const dropRefForArea = useRef<HTMLElement | undefined>();
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: [type, ...extraDropTypes],
      hover: (item: Item, monitor) => {
        // console.log("hovering", id);
        // debouncerForPlaceholder();
        // return if hovering over placeholder or itself
        if (item?.id === id || id === PLACEHOLDER_ID) return;
        // console.log(item, id);
        // console.log({ content });
        // return if placeholder is at the correct position
        const hoveredItemIndex = getIndex(content, id);
        // console.log({ hoveredItemIndex });

        if (hoveredItemIndex === undefined) return;

        const placeHolderIndex = getIndex(content, PLACEHOLDER_ID);

        const elementShouldDropTop = isPointerAboveHalf(
          dropRefForArea.current,
          monitor?.getClientOffset()?.y
        );
        // console.log({ placeHolderIndex });
        if (
          (elementShouldDropTop && placeHolderIndex === hoveredItemIndex - 1) ||
          (!elementShouldDropTop && placeHolderIndex === hoveredItemIndex + 1)
        )
          return;
        // console.log({ hoveredItemIndex, placeHolderIndex });
        // console.log("placeholder is not correct");

        // put placeholder into correct position
        let updatedContent = [...content];
        let dropIndex = hoveredItemIndex + (elementShouldDropTop ? 0 : 1);

        if (placeHolderIndex !== undefined) {
          // return;
          updatedContent.splice(placeHolderIndex, 1);

          if (placeHolderIndex < dropIndex) dropIndex--;
        }

        const placeHolderContent = { id: PLACEHOLDER_ID };

        updatedContent.splice(dropIndex, 0, placeHolderContent);
        // console.log({ updatedContent });
        dispatch(contentUpdateAction(updatedContent));
        // debouncerForPlaceholder();
      },
      drop: (item, monitor) => {
        if (extraDropTypes.includes(item.type)) {
          extraDropTypesHandle && extraDropTypesHandle(content, item.id);
          return;
        }

        const draggedItemIndex = getIndex(content, item?.id);
        let placeHolderIndex = getIndex(content, PLACEHOLDER_ID);

        if (draggedItemIndex === undefined || placeHolderIndex === undefined)
          return;

        const updatedContent = [...content];

        const component = updatedContent.splice(draggedItemIndex, 1);
        // console.log(component);
        if (draggedItemIndex < placeHolderIndex) placeHolderIndex--;

        updatedContent.splice(placeHolderIndex, 1, component[0]);
        console.log({ updatedContentDrop: updatedContent });
        dispatch(contentUpdateAction(updatedContent));
      },
      collect: (monitor) => {
        // console.log(monitor);
        return {
          isOver: !!monitor.isOver(),
        };
      },
    }),
    [content]
  );

  // useEffect(() => {
  // isDragging && memoDebouncer();
  // if (isOver)
  // remove place holder
  // return () => {
  //   const contentWithoutPlaceHolder = content?.filter(
  //     (item: Item) => item.id !== PLACEHOLDER_ID
  //   );
  //   dispatch(contentUpdateAction(contentWithoutPlaceHolder));
  // };
  // }, [isOver, memoDebouncer]);

  return children(drag, drop, dropRefForArea);
}
