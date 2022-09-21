import { useDispatch, useSelector } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

export function EditWrapper({ children, ...props }) {
  const dispatch = useDispatch();

  const {
    builder: { activeComponent },
  } = useSelector((state) => state);

  const handleBlur = (e) => {
    const { module } = props;
    let { name: key, value } = e.target;

    if (key === "margin" || "padding") {
      value += "px";
    }

    console.log({ activeComponent, module, key, value });

    dispatch(
      updatePageComponents({ component: activeComponent, module, key, value })
    );
  };

  return (
    <div {...props} onBlur={handleBlur}>
      {children}
    </div>
  );
}
