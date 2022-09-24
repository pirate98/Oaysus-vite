import { useDispatch, useSelector } from "react-redux";
import { getIndexes, numerateTheName } from "../molecules/helpers/builder";
import { setPageComponents } from "../pages/builder/builderSlice";
import dragDrop from "../data/dragDrop";
import * as builderComponents from "../molecules/builderComponents";

export const useAddComponentToPageBuilder = () => {
  const dispatch = useDispatch();
  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const fn = (componentName) => {
    const { undefined, blankComponentIndex } = getIndexes(
      pageComponents,
      null,
      dragDrop.BLANK_COMPONENT_NAME
    );

    let newPage = [...pageComponents];
    // console.log(builderComponents["Incentive1"].json);
    const numerizedName = numerateTheName(newPage, componentName);

    newPage.splice(blankComponentIndex, 1, {
      ...builderComponents[componentName].json,
      name: numerizedName,
    });
    // console.log({ newPage });
    dispatch(setPageComponents(newPage));
  };

  return { addComponentToPageBuilder: fn };
};
