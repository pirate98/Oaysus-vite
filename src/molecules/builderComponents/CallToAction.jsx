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
import { filterOnlyStyleValues } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";
import variables from "../../assets/css/_variables.module.scss";
import { PlainButton } from "../../atoms";

const fn = forwardRef(({ content }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <div
      className={classes.callToAction + " " + classes.headline}
      ref={ref}
      style={{ ...styles.background, ...styles.border }}
    >
      <Grid container flexDirection={"row"} justifyContent={"center"}>
        <Grid item>
          <EditableElement
            name="title"
            data-oa-name="title"
            data-oa-type="text"
            type="h3"
            style={{ ...styles.title }}
          >
            {content.title ? content.title.text : ""}
          </EditableElement>
        </Grid>
        <Grid item>
          <span className={classes.textGreen} style={{ ...styles.money }}>
            &nbsp;for $20.00
          </span>
        </Grid>
      </Grid>
      <PlainButton variant="contained" sx={{ ...styles.buyButton }}>
        Buy Now
      </PlainButton>
    </div>
  );
});

const json = {
  title: {
    text: "Buy This T-Shirt Right Now",
    fontFamily: "Roboto",
    fontWeight: "500",
    lineHeight: "20px",
    fontSize: "24px",
    color: "#000000",
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
    textAlign: "center",
  },
  money: {
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    color: variables.shopifyGreen,
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  background: {
    backgroundColor: "#f2f2f2",
    backgroundImage: "url(/mockData/strategy.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  buyButton: {
    width: "280px",
    marginLeft: "30px",
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: "10px",
    backgroundColor: "#008060",
    color: "white",
    borderStyle: "solid",
    borderWidth: "0",
    borderRadius: "0",
    borderColor: "#000000",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const CallToAction = fn;
