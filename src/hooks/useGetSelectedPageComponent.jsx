import { useSelector } from "react-redux";

export function useGetSelectedPageComponent() {
  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  let component = pageComponents.filter(
    (comp) => comp.name === selectedPageComponentName
  );

  return component[0] || {};
}
