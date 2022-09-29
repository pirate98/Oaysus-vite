import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import { DropZoneWrapper } from "../../molecules/builderComponents";
import { ComponentToolBar } from "../../molecules/wrappers/builderComponentToolBar/ComponentToolBar";
import { setSelectedPageComponentName } from "../../pages/builder/builderSlice";
import classes from "./Page.module.scss";

export function Page() {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  // console.log({ pageComponents });

  const handleClick = (componentName) => {
    if (selectedPageComponentName === componentName) return;

    dispatch(setSelectedPageComponentName(componentName));
  };

  return (
    <div>
      {/* <Grid container spacing={2} columnSpacing={4}> */}
      {pageComponents &&
        pageComponents.length &&
        pageComponents.map((component, idx) => {
          return (
            <div
              className={classes.componentWrapper}
              key={`${component.name}-idx`}
              onMouseDownCapture={() => handleClick(component.name)}
            >
              <ComponentToolBar>
                <DropZoneWrapper moduleContent={component} />
              </ComponentToolBar>
            </div>
          );
        })}
      {/* </Grid> */}
    </div>
  );
}
