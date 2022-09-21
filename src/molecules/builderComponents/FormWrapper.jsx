import { useDispatch, useSelector } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

export function FormWrapper({ children, name }) {
  const dispatch = useDispatch();
  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const handleSubmit = (e) => e.preventDefault();

  const handleBlur = (e) => {
    console.log({ name });
    console.log(e.target);

    const { name: module, value, type } = e.target;

    dispatch(updatePageComponents({ component: name, module, type, value }));
  };

  return (
    <form onSubmit={handleSubmit} onBlur={handleBlur}>
      {children}
    </form>
  );
}
