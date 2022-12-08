import { useCallback } from "react";

import { useDispatch, useSelector, useStore } from "react-redux";
import { getIndexes, numerateTheName } from "@/molecules/helpers/builder";
import { setPageComponents } from "@/pages/builder/builderSlice";
import componentsData from "@/data/componentsData";
import * as builderComponents from "@/organisms/builder/builderComponents";

export const useAddComponentToPageBuilder = () => {
  const dispatch = useDispatch();

  const { getState } = useStore();

  const func = async (componentName) => {
    if (!componentName) return;

    const { pageComponents } = getState().builder;

    const { undefined, blankComponentIndex } = getIndexes(
      pageComponents,
      null,
      componentsData.BLANK_COMPONENT_NAME
    );

    let newPage = [...pageComponents];
    // console.log(builderComponents["Exclusive"].json);
    const numerizedName = numerateTheName(newPage, componentName);

    newPage.splice(blankComponentIndex, 1, {
      ...builderComponents[componentName].json,
      name: numerizedName,
    });
    // console.log({ newPage });
    await dispatch(setPageComponents(newPage));
    // await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return { addComponentToPageBuilder: func };
};
