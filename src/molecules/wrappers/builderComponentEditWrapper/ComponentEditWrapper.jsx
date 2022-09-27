import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPageComponentName,
  updatePageComponents,
} from "../../../pages/builder/builderSlice";

export function ComponentEditWrapper({ children, componentName }) {
  const dispatch = useDispatch();

  // const handleSubmit = (e) => e.preventDefault();

  const handleBlur = (e) => {
    // console.log({ name });
    // console.log(e.target);

    const { oaName: module, oaType: key } = e.target.dataset;
    const { value, textContent } = e.target;

    // console.log({ textContent });

    dispatch(
      updatePageComponents({
        component: componentName,
        module,
        key,
        value: value || textContent,
      })
    );
  };

  const clickHandler = (e) => {
    dispatch(setSelectedPageComponentName(componentName));
  };

  return (
    <div onClick={clickHandler} onBlur={handleBlur}>
      {children}
    </div>
  );
}
