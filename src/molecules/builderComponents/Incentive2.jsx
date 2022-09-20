import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export const Incentive2 = forwardRef(({ content }, ref) => {
  return (
    <Grid item xs={12} ref={ref}>
      <div className={classes.offer}>
        <p>Exclusive offer expires in: 05:05</p>
      </div>
    </Grid>
  );
});
