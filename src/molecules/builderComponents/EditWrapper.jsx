import { useDispatch, useSelector } from "react-redux";
import {
  setActiveComponent,
  updatePageComponents,
} from "../../pages/builder/builderSlice";
import { removeDigitsAndReturnComponentName } from "../helpers/builder";

export function EditWrapper({ children, componentName }) {
  const dispatch = useDispatch();

  // const handleSubmit = (e) => e.preventDefault();

  const handleBlur = (e) => {
    // console.log({ name });
    console.log(e.target);

    const { oaName: module, oaType: type } = e.target.dataset;
    const { value, textContent } = e.target;

    console.log({ textContent });

    dispatch(
      updatePageComponents({
        component: componentName,
        module,
        type,
        value: value || textContent,
      })
    );
  };

  const clickHandler = (e) => {
    dispatch(setActiveComponent(componentName));
  };

  return (
    <div onClick={clickHandler} onBlur={handleBlur}>
      {children}
    </div>
  );
}
