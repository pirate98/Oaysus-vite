import { useSelector } from "react-redux";

export function useGetSelectedPageComponent() {
  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  let component = pageComponents.filter(
    (comp) => comp.id === selectedPageComponentName
  );

  // console.log(component[0].name);

  return component[0] || {};
}
