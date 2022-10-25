import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import * as builderButtons from "./builderButtons";
const _builderButtons: Record<any, any> = builderButtons;
import * as builderSettingMenus from "@/organisms/builder/builderSettingMenus";
const _builderSettingMenus: Record<string, any> = builderSettingMenus;
import { setHoveredComponent } from "@/pages/builder/builderSlice";
import { BuilderButtonWrapper } from "@/organisms/builder/wrappers";
import { EditBox } from "@/organisms/builder/builderSideBarComponents/editBox/EditBox";
import { removeDigitsAndReturnComponentName } from "@/helpers/builder";
import { RootState } from "@/data/store";
import { builderSettings } from "@/data/builderSettings";
const { sideMenuOrder } = builderSettings;

export function BuilderSideBarComponents() {
  const dispatch = useDispatch();
  const {
    builder: { hoveredComponent, selectedPageComponentName },
  } = useSelector((state: RootState) => state);

  const _selectedPageComponentName = removeDigitsAndReturnComponentName(
    selectedPageComponentName
  );
  const DynamicComponentMenu = _selectedPageComponentName
    ? _builderSettingMenus[_selectedPageComponentName]
    : _selectedPageComponentName;

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
      {sideMenuOrder.map((component, idx: number) => {
        const DynamicComponent = _builderButtons[component];
        // console.log({ component });
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
                text: component,
                hoverColor: "#ffffff",
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
