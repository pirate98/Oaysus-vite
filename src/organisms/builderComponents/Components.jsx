import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import * as builderButtons from "../../molecules/builderButtons";
import * as componentMenus from "../../molecules";
import {
  setActiveComponent,
  setHoveredComponent,
} from "../../pages/builder/builderSlice";
import { Card } from "../../molecules/builderButtonCard/Card";
import constants from "../../data/constants";
import { EditBox } from "../../molecules/editBox/EditBox";

export function Components() {
  const dispatch = useDispatch();
  const {
    builder: { hoveredComponent, activeComponent },
  } = useSelector((state) => state);

  const DynamicComponentMenu =
    componentMenus[activeComponent] || activeComponent;

  // Array content must be same with the names of the components
  const components = [
    "Incentive1",
    "Banner",
    "Content1",
    "Content2",
    "Product",
    "Incentive2",
    "Video",
    "Content3",
    "CallToAction",
  ];

  return activeComponent ? (
    <>
      <EditBox title={activeComponent} />
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
      {components.map((component, idx) => {
        const DynamicComponent = builderButtons[component];

        return (
          <Grid
            onClick={() => dispatch(setActiveComponent(component))}
            key={`component-${idx}`}
            item
            xs={6}
            onMouseOver={() => {
              dispatch(setHoveredComponent(component));
            }}
            onMouseOut={() => dispatch(setHoveredComponent(undefined))}
          >
            <Card
              title={{
                text: component,
                hoverColor: "white",
              }}
              background={{ hoverColor: constants.SHOPIFY_GREEN }}
              hover={hoveredComponent === component}
            >
              <DynamicComponent hover={hoveredComponent === component} />
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
