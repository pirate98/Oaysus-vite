import {
  useEffect,
  useState,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";

import { AnyAction } from "@reduxjs/toolkit";
import {
  ConnectDragSource,
  ConnectDropTarget,
  useDrag,
  useDrop,
} from "react-dnd";
import { useDispatch } from "react-redux";

import { getIndex, isPointerAboveHalf } from "./helpers";
import { CONSTANT } from "../../../data/constants";

const PLACEHOLDER_ID = CONSTANT.DND_PLACEHOLDER_ID;

interface Props {
  children: (
    drag: ConnectDragSource,
    drop: ConnectDropTarget,
    dropRefForArea: MutableRefObject<HTMLElement | undefined>
  ) => JSX.Element;
  id: number | string;
  type: string;
  extraDropTypes: string[];
  content: any[];
  contentUpdateAction: (arr: any[]) => AnyAction;
}

type Item = Record<any, any>;

export function DragAndDrop({
  children,
  id,
  type,
  content,
  contentUpdateAction,
  extraDropTypes,
}: // onDrop,
Props) {
  const dispatch = useDispatch();

  const [collected, drag, dragPreview] = useDrag(
    () => ({
      type,
      item: { id, type },
      end: (item, monitor) => {
        const didDrop = monitor.didDrop();

        if (didDrop) return;

        const contentWithoutPlaceHolder = content?.filter(
          (item: Item) => item.id !== PLACEHOLDER_ID
        );

        dispatch(contentUpdateAction(contentWithoutPlaceHolder));
      },
    }),
    [content]
  );

  const dropRefForArea = useRef<HTMLElement | undefined>();
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: [type, ...extraDropTypes],
      hover: (item: Item, monitor) => {
        // return if hovering over placeholder or itself
        // console.log(id);
        if (item?.id === id || id === PLACEHOLDER_ID) return;

        // return if placeholder is at the correct position
        const hoveredItemIndex = getIndex(content, id);
        if (hoveredItemIndex === undefined) return;

        const placeHolderIndex = getIndex(content, PLACEHOLDER_ID);

        const elementShouldDropTop = isPointerAboveHalf(
          dropRefForArea.current,
          monitor?.getClientOffset()?.y
        );

        if (
          (elementShouldDropTop && placeHolderIndex === hoveredItemIndex - 1) ||
          (!elementShouldDropTop && placeHolderIndex === hoveredItemIndex + 1)
        )
          return;

        // console.log({ hoveredItemIndex, placeHolderIndex });
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

        dispatch(contentUpdateAction(updatedContent));
      },
      drop: (item, monitor) => {
        const draggedItemIndex = getIndex(content, item?.id);
        let placeHolderIndex = getIndex(content, PLACEHOLDER_ID);

        if (draggedItemIndex === undefined || placeHolderIndex === undefined)
          return;

        const updatedContent = [...content];

        const component = updatedContent.splice(draggedItemIndex, 1);
        // console.log(component);
        if (draggedItemIndex < placeHolderIndex) placeHolderIndex--;

        updatedContent.splice(placeHolderIndex, 1, component[0]);

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

  useEffect(() => {
    // if (isOver)
    // remove place holder
    // return () => {
    //   const contentWithoutPlaceHolder = content?.filter(
    //     (item: Item) => item.id !== PLACEHOLDER_ID
    //   );
    //   dispatch(contentUpdateAction(contentWithoutPlaceHolder));
    // };
  }, [isOver]);

  return children(drag, drop, dropRefForArea);
}
