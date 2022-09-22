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

const fn = forwardRef(({ content }, ref) => {
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

const json = {
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
  subTitle: {
    text: "Exclusive offer expires in: ",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "18px",
    color: "#ffffff",
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "14px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  background: {
    backgroundColor: "rgb(0, 128, 96)",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  buyButton: {},
};

Object.defineProperty(fn, "json", { value: json });

export const CallToAction = fn;
