import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedPageComponentName,
  updatePageComponents,
} from "../../../pages/builder/builderSlice";

export function ComponentEditWrapper({ children, componentName }) {
  const dispatch = useDispatch();

  // const handleSubmit = (e) => e.preventDefault();

  const handleBlur = ({ target }) => {
    // console.log({ name });
    // console.log(target);

    const { oaName: module, oaType: key } = target.dataset;
    let { value, innerHTML } = target;

    const tagRegex = /<[iu]\s?.+<\/[iu]>/g;
    const tagOpeningRegex = /<[iu]\s.+?>/g;

    const tagMatch = innerHTML.match(tagRegex);

    if (tagMatch) {
      const tagString = tagMatch[0];
      // console.log({ innerHTML, tagString });
      const tag = tagString[1];

      const tagStringWithoutStyle = tagString.replace(
        tagOpeningRegex,
        `<${tag}>`
      );

      const innerHTMLWithoutStyle = innerHTML.replace(
        tagString,
        tagStringWithoutStyle
      );
      // console.log({ innerHTMLWithoutStyle });

      innerHTML = innerHTMLWithoutStyle;
    }
    dispatch(
      updatePageComponents({
        component: componentName,
        module,
        key,
        value: value || innerHTML,
      })
    );
  };

  // const clickHandler = (e) => {
  //   dispatch(setSelectedPageComponentName(componentName));
  // };

  return (
    <div
      // onClick={clickHandler}
      onBlur={handleBlur}
    >
      {children}
    </div>
  );
}
