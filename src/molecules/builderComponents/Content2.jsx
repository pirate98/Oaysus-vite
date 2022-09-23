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

const fn = forwardRef(({ content }, ref) => {
  return (
    <Grid
      item
      container
      spacing={3}
      ref={ref}
      className={classes.componentContainer}
    >
      <Grid item>
        <p className={classes.headline}>{content.title.text}</p>
        <Text variant="bodyLg" as="p">
          {content.description.text}
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

const json = {
  name: "",
  title: {
    text: "Headline Content 2",
    fontFamily: "Roboto",
    fontWeight: "",
    lineHeight: "20px",
    fontSize: "24px",
    color: "#ffffff",
    paddingTop: "16px",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "18px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  description: {
    text: `You could highlight specific ingredients, materials, or functionality
    that make your product unique, and explain how it will improve the
    customer's life.`,
    fontFamily: "Roboto",
    fontWeight: "",
    lineHeight: "20px",
    fontStyle: "",
    fontSize: "24px",
    color: "#ffffff",
    paddingTop: "16px",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "18px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  // background: {
  //   backgroundColor: "rgb(0, 128, 96)",
  //   backgroundImage: "url(/mockData/flowers.jpg)",
  //   backgroundSize: "contain",
  //   backgroundRepeat: "no-repeat",
  // },
  border: {},
  size: {},
  buyButton: {},
  layout: {
    paddingTop: "22px",
    paddingRight: "10px",
    paddingBottom: "2px",
    paddingLeft: "10px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Content2 = fn;
