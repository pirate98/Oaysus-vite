import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer } from "@shopify/polaris";

import classes from "./.module.scss";
import { EditableWithToolBar } from "@/organisms/builder/wrappers";
import { componentsData } from "@/data/componentsData";
import { filterOnlyStyleValues, makeEditorState } from "@/helpers/upsells";
import { BuilderComponentProps } from "../../../../types/BuilderComponent.type";

const fn = forwardRef<HTMLDivElement>(
  ({ content, className }: BuilderComponentProps, ref) => {
    const styles = filterOnlyStyleValues(content);

    const productBackgroundImage =
      content?.backgroundPreview ||
      (content?.images
        ? `url(${content.images[0]?.url})`
        : `url(${componentsData.PLACEHOLDER_IMAGE_URL})`);

    return (
      <div
        className={classes.componentContainer}
        style={{ backgroundColor: styles?.layout?.backgroundColor }}
        ref={ref}
      >
        <div className={classes.box}>
          <Grid
            container
            columnSpacing={4}
            sx={{ ...styles?.layout, backgroundColor: "inherit" }}
          >
            <Grid
              item
              xs={6}
              className={
                content?.layout?.imagePosition === "right" ? classes.order1 : ""
              }
            >
              <div
                className={classes.image1}
                style={{
                  ...styles?.image,
                  backgroundImage: productBackgroundImage,
                }}
              ></div>
            </Grid>
            <Grid item sx={{ marginBottom: "2px" }} xs={6}>
              <TextContainer>
                <EditableWithToolBar
                  style={{ ...styles?.title }}
                  module="title"
                  data-oa-type="text"
                >
                  {content?.title?.editorState}
                </EditableWithToolBar>
                <EditableWithToolBar
                  style={{ ...styles?.description }}
                  module="description"
                  data-oa-type="text"
                >
                  {content?.description?.editorState}
                </EditableWithToolBar>
              </TextContainer>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
);

const json = {
  layout: {
    imagePosition: "right",
    backgroundColor: "#ffffff",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  name: "",
  title: {
    editorState: makeEditorState("Headline Content 1"),
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
    marginBottom: "21px",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  description: {
    editorState: makeEditorState(
      "You could highlight specific ingredients, materials, or functionality that make your product unique,and explain how it will improve the customer's life."
    ),
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    fontStyle: "",
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
  },
  image: {
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#e0e0e0",
  },
};

Object.defineProperty(fn, "json", {
  value: json,
  writable: false,
  configurable: false,
  // get() {
  //   return json;
  // },
});

export const Feature = fn;
