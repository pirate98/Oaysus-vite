import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer } from "@shopify/polaris";

import classes from "./.module.scss";
import { filterOnlyStyleValues, makeEditorState } from "../../helpers/builder";
import { EditableWithToolBar } from "../../wrappers/";

const fn = forwardRef(({ content = {}, className, ...rest }, ref) => {
  const styles = filterOnlyStyleValues(content);

  const imageSection = (
    // <img
    //   className={classes.image1}
    //   src={
    //     content.images ? content.images[0].url : "/image/empty-image-dark.svg"
    //   }
    // />

    <div
      className={classes.image1}
      style={{
        backgroundImage: content.images
          ? `url(${content.images[0].url})`
          : 'url("/image/empty-image-dark.svg")',
        backgroundSize: content.images ? "cover" : "unset",
      }}
    ></div>
  );

  const textSection = (
    <Grid item sx={{ marginBottom: "2px" }}>
      <TextContainer>
        <EditableWithToolBar
          type="h3"
          style={{ ...styles.title }}
          // name="title"
          module="title"
          data-oa-type="text"
        >
          {content?.title?.editorState}
        </EditableWithToolBar>

        <EditableWithToolBar
          type="p"
          style={{ ...styles.description }}
          // name="title"
          module="description"
          data-oa-type="text"
        >
          {content?.description?.editorState}
        </EditableWithToolBar>
      </TextContainer>
    </Grid>
  );

  return (
    content && (
      <div
        className={
          classes.componentContainer + (className ? ` ${className}` : "")
        }
        ref={ref}
      >
        <Grid container columnSpacing={4} sx={{ ...styles.layout }}>
          <Grid item xs={6}>
            {content.imagePosition === "left" ? imageSection : textSection}
          </Grid>
          <Grid item xs={6}>
            {content.imagePosition === "left" ? textSection : imageSection}
          </Grid>
        </Grid>
      </div>
    )
  );
});

const json = {
  imagePosition: "right",
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
  background: {
    backgroundColor: "#008060",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  layout: {
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Content1 = fn;
