import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import { EditableWithToolBar } from "../../wrappers";
import classes from "./.module.scss";
import { filterOnlyStyleValues, makeEditorState } from "../../helpers/builder";
import variables from "../../../assets/css/_variables.module.scss";
import { AddButton, BuilderButton, PlainButton } from "../../../atoms";

const fn = forwardRef(({ content, className }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <div
      className={classes.callToAction + (className ? ` ${className}` : "")}
      ref={ref}
      style={{ ...styles.layout, ...styles.border }}
    >
      <div className={classes.width}>
        <Grid
          container
          flexDirection={"row"}
          justifyContent={"start"}
          alignItems={"center"}
          spacing={1}
        >
          <Grid item>
            <EditableWithToolBar
              name="title"
              module="title"
              data-oa-type="text"
              type="h3"
              style={{ ...styles.title }}
            >
              {content?.title?.editorState}
            </EditableWithToolBar>
          </Grid>
          <Grid item>
            <div className={classes.textGreen} style={{ ...styles.subTitle }}>
              &nbsp;for $20.00
            </div>
          </Grid>
        </Grid>
        <BuilderButton sx={{ ...styles.buyButton }}>Buy Now</BuilderButton>
      </div>
    </div>
  );
});

const json = {
  title: {
    editorState: makeEditorState("Buy This T-Shirt Right Now"),
    fontFamily: "Roboto",
    fontWeight: "400",
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
  subTitle: {
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
  layout: {
    backgroundColor: "#f2f2f2",
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  buyButton: {
    width: "280px",
    marginLeft: "30px",
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: "",
    backgroundColor: "#008060",
    color: "#ffffff",
    borderStyle: "solid",
    borderWidth: "0",
    borderRadius: "",
    borderColor: "#000000",

    "&:hover": {
      backgroundColor: variables.primaryHover,
    },
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Action = fn;
