import { cloneElement, forwardRef } from "react";

import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

import { componentsData } from "../../../data/componentsData";
import { removeComponentFromPage } from "../../../pages/builder/builderSlice";

export const DragWrapper = forwardRef(({ children, componentName }, ref) => {
  const dispatch = useDispatch();

  const [{}, drag] = useDrag({
    type: componentsData.types.BUILDER_COMPONENT,
    // data of the item to be available to the drop methods
    item: { name: componentName },
    end: (monitor) => {
      // console.log({ monitor });
      dispatch(removeComponentFromPage(componentsData.BLANK_COMPONENT_NAME));
    },
  });

  return cloneElement(children, {
    ref: (el) => {
      drag(el);
      ref && ref(el);
    },
  });
});
