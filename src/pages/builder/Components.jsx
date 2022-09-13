import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";

import * as builderComponents from "../../components/builder";
import { setHoveredComponent } from "./builderSlice";
import { Card } from "./Card";
import constants from "../../app/constants";

export function Components() {
  const dispatch = useDispatch();
  const {
    builder: { hoveredComponent },
  } = useSelector((state) => state);

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

  return (
    <Grid
      container
      spacing={"10px"}
      sx={{ padding: "10px", cursor: "pointer" }}
    >
      {components.map((component, idx) => {
        const DynamicComponent = builderComponents[component];
        return (
          <Grid
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
