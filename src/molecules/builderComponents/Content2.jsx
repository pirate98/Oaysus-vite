import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import {
  TextContainer,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export const Content2 = forwardRef(({ content }, ref) => {
  return (
    <Grid item container spacing={3} ref={ref}>
      <Grid item>
        <p className={classes.headline}>Headline Content 2</p>
        <Text variant="bodyLg" as="p">
          You could highlight specific ingredients, materials, or functionality
          that make your product unique, and explain how it will improve the
          customer's life.
        </Text>
      </Grid>
      <Grid item sx={{ width: "208px" }}>
        <Button primary fullWidth>
          Buy Now
        </Button>
      </Grid>
    </Grid>
  );
});
