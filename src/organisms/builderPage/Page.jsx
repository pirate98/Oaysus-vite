import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import { DropZoneWrapper } from "../../molecules/builderComponents";
import {
  builderComponentMaker,
  removeDigitsAndReturnComponentName,
} from "../../helpers/builder";
import { ComponentToolBar } from "../../molecules/wrappers/builderComponentToolBar/ComponentToolBar";
import {
  setPageComponents,
  setSelectedPageComponentName,
} from "../../pages/builder/builderSlice";
import classes from "./Page.module.scss";
import * as builderComponents from "../../molecules/builderComponents";
import { useEffect } from "react";

export function Page() {
  const dispatch = useDispatch();

  const {
    builder: {
      pageComponents,
      selectedPageComponentName,
      draggedComponent,
      componentList,
    },
  } = useSelector((state) => state);

  // console.log({ pageComponents });

  const handleClickOnComponent = (componentName) => {
    console.log({ componentName });
    if (selectedPageComponentName === componentName) return;

    dispatch(setSelectedPageComponentName(componentName));
  };

  useEffect(() => {
    // if (pageComponents) return;
    const defaultComponents = builderComponentMaker(componentList);
    dispatch(setPageComponents(defaultComponents));
  }, [componentList]);

  return (
    // <Grid container spacing={2} columnSpacing={4}>
    <>
      {pageComponents &&
        pageComponents.length &&
        pageComponents.map((component, idx) => {
          const DynamicComponent =
            builderComponents[
              removeDigitsAndReturnComponentName(component.name)
            ];

          return (
            <Fragment key={`${component.name}-idx`}>
              <ComponentToolBar
                onMouseDownCapture={() =>
                  handleClickOnComponent(component.name)
                }
              >
                <DropZoneWrapper moduleContent={component}>
                  <DynamicComponent
                    content={component}
                    className={
                      draggedComponent === component.name
                        ? classes.dragging
                        : ""
                    }
                  />
                </DropZoneWrapper>
              </ComponentToolBar>
            </Fragment>
          );
        })}
    </>
    // </Grid>
  );
}
