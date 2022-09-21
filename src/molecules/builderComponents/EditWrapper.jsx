import { useDispatch, useSelector } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

export function EditWrapper({ children, componentName }) {
  const dispatch = useDispatch();

  // const handleSubmit = (e) => e.preventDefault();

  const handleBlur = (e) => {
    // console.log({ name });
    console.log(e.target);

    const { value, textContent } = e.target;
    const { oaName: module, oaType: type } = e.target.dataset;
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

  return <div onBlur={handleBlur}>{children}</div>;
}
