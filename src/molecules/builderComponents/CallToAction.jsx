import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  TextContainer,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export const CallToAction = forwardRef(({ content }, ref) => {
  return (
    <div className={classes.callToAction + " " + classes.headline} ref={ref}>
      Buy This T-Shirt Right Now{" "}
      <span className={classes.textGreen}>&nbsp;for $20.00</span>
      <Box sx={{ width: "208px", marginLeft: "30px" }}>
        <Button primary fullWidth>
          Buy Now
        </Button>
      </Box>
    </div>
  );
});
