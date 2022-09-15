import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import * as builderComponents from "../../../components/builder";
import * as componentMenus from "./molecules";
import { setActiveComponent, setHoveredComponent } from "../builderSlice";
import { Card } from "./molecules/Card";
import constants from "../../../data/constants";
import { EditBox } from "./molecules/EditBox";

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
        const DynamicComponent = builderComponents[component];

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
