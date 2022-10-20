import { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  builderComponentMaker,
  removeDigitsAndReturnComponentName,
} from "@/helpers/builder";
import { ComponentToolBar } from "@/organisms/builder/wrappers/builderComponentToolBar/ComponentToolBar";
import {
  setPageComponents,
  setSelectedPageComponentName,
} from "@/pages/builder/builderSlice";
import classes from "./BuilderComposition.module.scss";
import * as builderComponents from "@/organisms/builder/builderComponents";
import { RootState } from "@/data/store";
import { Wrapper } from "../../wrappers";
import componentsData from "../../../data/componentsData";

interface Props {
  pageContent?: Record<any, any>[];
}

export function BuilderComposition({ pageContent }: Props) {
  const dispatch = useDispatch();

  const {
    builder: {
      pageComponents,
      selectedPageComponentName,
      draggedComponent,
      componentList,
    },
  } = useSelector((state: RootState) => state);

  // console.log({ pageComponents });

  const handleClickOnComponent = (componentName: string) => {
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
      {pageComponents?.length &&
        pageComponents.map((component, idx) => {
          const componentName = removeDigitsAndReturnComponentName(
            component.id
          ) as keyof typeof builderComponents | undefined;

          const DynamicComponent =
            componentName && builderComponents[componentName];

          if (!DynamicComponent) return;

          return (
            <Fragment key={`${component.id}-idx`}>
              <Wrapper.DragAndDrop
                id={component.id}
                type={componentsData.types.BUILDER_COMPONENT_TOOLBAR}
                extraDropTypes={[componentsData.types.BUILDER_COMPONENT]}
                content={pageComponents}
                contentUpdateAction={setPageComponents}
              >
                {(drag, drop, dropRefForArea) => (
                  <ComponentToolBar
                    onMouseDownCapture={() =>
                      handleClickOnComponent(component.id)
                    }
                    dragRef={drag}
                  >
                    {/* <DropZoneWrapper moduleContent={component}> */}
                    <DynamicComponent
                      ref={(el: HTMLElement) => {
                        drop(el);
                        dropRefForArea.current = el;
                      }}
                      content={component}
                      className={
                        draggedComponent === component.name
                          ? classes.dragging
                          : ""
                      }
                    />
                    {/* </DropZoneWrapper> */}
                  </ComponentToolBar>
                )}
              </Wrapper.DragAndDrop>
            </Fragment>
          );
        })}
    </>
    // </Grid>
  );
}
