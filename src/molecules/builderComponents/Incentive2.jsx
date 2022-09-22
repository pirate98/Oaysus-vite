import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

const fn = forwardRef(({ content }, ref) => {
  return (
    <Grid item xs={12} ref={ref}>
      <div className={classes.offer}>
        <p>Exclusive offer expires in: 05:05</p>
      </div>
    </Grid>
  );
});

const json = {
  name: "",
  title: {
    text: "Add a Test T-shirt to your order",
    fontFamily: "Roboto",
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
  countdown: {
    duration: "5",
    visibility: true,
  },
  background: {
    backgroundColor: "rgb(0, 128, 96)",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
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

export const Incentive2 = fn;
