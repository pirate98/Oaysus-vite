import { cloneElement, forwardRef, useEffect } from "react";

import { DragPreviewImage, useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

import { componentsData } from "@/data/componentsData";
import {
  removeComponentFromPage,
  setDraggedComponent,
} from "@/pages/builder/builderSlice";

import { logo } from "@/assets/svg";

export const DragWrapper = forwardRef(
  ({ children, componentRef, onDrag, onDragEnd }, ref) => {
    const dispatch = useDispatch();

    const {
      builder: { selectedPageComponentName, draggedComponent },
    } = useSelector((state) => state);

    const [{ isDragging }, drag, preview] = useDrag({
      type: componentsData.types.BUILDER_COMPONENT_TOOLBAR,
      // data of the item to be available to the drop methods
      item: {
        name: selectedPageComponentName,
        type: componentsData.types.BUILDER_COMPONENT_TOOLBAR,
      },
      end: (monitor) => {
        dispatch(removeComponentFromPage(componentsData.BLANK_COMPONENT_NAME));
      },
      collect: (monitor) => {
        return {
          isDragging: !!monitor?.isDragging(),
        };
      },
    });

    useEffect(() => {
      if (!isDragging && draggedComponent)
        dispatch(setDraggedComponent(undefined));

      if (isDragging && !draggedComponent)
        dispatch(setDraggedComponent(selectedPageComponentName));
    }, [isDragging]);

    // useEffect(() => {
    //   if (isDragging) {
    //     onDrag();
    //     return;
    //   }

    //   onDragEnd();
    // }, [isDragging]);

    return (
      <>
        {/* <DragPreviewImage connect={preview} src={logo} /> */}
        {cloneElement(children, {
          ref: (el) => {
            drag(el);
            ref && ref(el);
          },
        })}
      </>
    );
  }
);
