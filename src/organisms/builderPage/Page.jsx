import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import { DropZoneWrapper } from "../../molecules/builderComponents";
import { removeDigitsAndReturnComponentName } from "../../molecules/helpers/builder";
import { ComponentToolBar } from "../../molecules/wrappers/builderComponentToolBar/ComponentToolBar";
import { setSelectedPageComponentName } from "../../pages/builder/builderSlice";
import classes from "./Page.module.scss";
import * as builderComponents from "../../molecules/builderComponents";
import { DragWrapper } from "../../molecules/wrappers/builderDragWrapper/DragWrapper";

export function Page() {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName, draggedComponent },
  } = useSelector((state) => state);

  // console.log({ pageComponents });

  const handleClickOnComponent = (componentName) => {
    if (selectedPageComponentName === componentName) return;

    dispatch(setSelectedPageComponentName(componentName));
  };

  return (
    <div>
      {/* <Grid container spacing={2} columnSpacing={4}> */}
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
      {/* </Grid> */}
    </div>
  );
}
