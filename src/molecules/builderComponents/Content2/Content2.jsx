import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import classes from "./.module.scss";
import { filterOnlyStyleValues, makeEditorState } from "../../helpers/builder";
import { BuilderButton } from "../../../atoms";
import { EditableWithToolBar } from "../../wrappers/";

const fn = forwardRef(({ content, className }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    // <Grid
    //   item
    //   container
    //   ref={ref}
    //   className={classes.componentContainer}
    //   // columnSpacing={2}
    //   spacing={2}
    // >
    <div
      className={classes.componentContainer}
      style={{ backgroundColor: styles?.layout?.backgroundColor }}
      ref={ref}
    >
      <div className={classes.box}>
        <div style={{ ...styles.layout, ...styles.border, ...content.size }}>
          <Grid item>
            <EditableWithToolBar
              type="h3"
              className={classes.headline}
              style={styles.title}
              module="title"
              data-oa-type="text"
            >
              {content?.title?.editorState}
            </EditableWithToolBar>
            <EditableWithToolBar
              type="p"
              style={styles.description}
              module="description"
              data-oa-type="text"
            >
              {content?.description?.editorState}
            </EditableWithToolBar>
          </Grid>
          <Grid item sx={{ width: "208px" }}>
            <BuilderButton variant="contained" sx={styles.buyButton}>
              Buy Now
            </BuilderButton>
          </Grid>
        </div>
      </div>
    </div>
  );
});

const json = {
  name: "",
  title: {
    editorState: makeEditorState("Headline Content 2"),
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "24px",
    color: "#000000",
    paddingTop: "16px",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "",
    marginTop: "4px",
    marginBottom: "21px",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  description: {
    editorState:
      makeEditorState(`You could highlight specific ingredients, materials, or functionality\
    that make your product unique, and explain how it will improve the customer's life.`),
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "24px",
    fontSize: "16px",
    color: "#000000",
    fontStyle: "",
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "24px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  // background: {
  //   backgroundColor: "#008060",
  //   backgroundImage: "url(/mockData/flowers.jpg)",
  //   backgroundSize: "contain",
  //   backgroundRepeat: "no-repeat",
  // },
  border: {
    borderStyle: "solid",
    borderWidth: "0",
    borderRadius: "0",
    borderColor: "#000000",
  },
  size: { width: "" },
  buyButton: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: "20px",
    backgroundColor: "#008060",
    color: "white",
  },
  layout: {
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "",
    marginRight: "",
    backgroundColor: "#ffffff",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Content2 = fn;
