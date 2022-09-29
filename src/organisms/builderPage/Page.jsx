import { useDispatch, useSelector } from "react-redux";

import { DropZoneWrapper } from "../../molecules/builderComponents";
import { ComponentToolBar } from "../../molecules/builderComponentToolBar/ComponentToolBar";
import { setSelectedPageComponentName } from "../../pages/builder/builderSlice";
import classes from "./Page.module.scss";

export function Page() {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  // console.log({ pageComponents });

  return (
    <div>
      {/* <Grid container spacing={2} columnSpacing={4}> */}
      {pageComponents &&
        pageComponents.length &&
        pageComponents.map((component, idx) => {
          return (
            <section
              className={classes.componentWrapper}
              key={idx}
              onMouseDownCapture={() => {
                dispatch(setSelectedPageComponentName(component.name));
              }}
            >
              <DropZoneWrapper moduleContent={component} />
              <ComponentToolBar />
            </section>
          );
        })}
      {/* </Grid> */}
    </div>
  );
}
