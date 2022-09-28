import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import * as builderButtons from "../../molecules/builderButtons";
import * as builderSettingMenus from "../../molecules/builderSettingMenus";
import { setHoveredComponent } from "../../pages/builder/builderSlice";
import { BuilderButtonWrapper } from "../../molecules/wrappers";
import { EditBox } from "../../molecules/editBox/EditBox";
import { removeDigitsAndReturnComponentName } from "../../molecules/helpers/builder";

export function Components() {
  const dispatch = useDispatch();
  const {
    builder: { hoveredComponent, selectedPageComponentName },
  } = useSelector((state) => state);

  const _selectedPageComponentName = removeDigitsAndReturnComponentName(
    selectedPageComponentName
  );
  const DynamicComponentMenu =
    builderSettingMenus[_selectedPageComponentName] ||
    _selectedPageComponentName;

  const componentFunctionNames = [
    "Incentive1",
    "Banner",
    "Content1",
    "Content2",
    "Product",
    "Incentive2",
    "Video",
    "CallToAction",
  ];

  return selectedPageComponentName ? (
    <>
      <EditBox title={_selectedPageComponentName} />
      <DynamicComponentMenu />
    </>
  ) : (
    <Grid
      container
      spacing={"10px"}
      sx={{
        padding: "10px",
        cursor: "pointer",
        overflow: "auto",
        marginTop: "0",
        paddingTop: "0",
      }}
    >
      {componentFunctionNames.map((component, idx) => {
        const DynamicComponent = builderButtons[component];

        return (
          <Grid
            // onClick={() => dispatch(setSelectedPageComponentName(component))}
            key={`component-${idx}`}
            item
            xs={6}
            onMouseOver={() => {
              dispatch(setHoveredComponent(component));
            }}
            onMouseOut={() => dispatch(setHoveredComponent(undefined))}
          >
            <BuilderButtonWrapper
              title={{
                title: component,
                hoverColor: "white",
              }}
              // background={{ hoverColor: constants.COLOR_MAIN }}
              hover={hoveredComponent === component}
            >
              <DynamicComponent hover={hoveredComponent === component} />
            </BuilderButtonWrapper>
          </Grid>
        );
      })}
    </Grid>
  );
}
