import { useSelector } from "react-redux";

export function useGetActiveComponent() {
  const {
    builder: { pageComponents, activeComponent },
  } = useSelector((state) => state);

  let component = pageComponents.filter(
    (comp) => comp.name === activeComponent
  );

  return component[0];
}
