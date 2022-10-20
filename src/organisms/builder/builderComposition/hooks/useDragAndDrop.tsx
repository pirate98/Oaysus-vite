import { useDispatch } from "react-redux";
import componentsData from "../../../../data/componentsData";
import { removeComponentFromPage } from "../../../../pages/builder/builderSlice";

export function useDragAndDrop() {
  const dispatch = useDispatch();

  const onDragEnd = () =>
    dispatch(removeComponentFromPage(componentsData.BLANK_COMPONENT_NAME));

  return { onDragEnd };
}
