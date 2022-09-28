import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { makeEditorState, styleFilter } from "../../helpers/builder";
import { EditableStyleable } from "../../wrappers/";

const fn = forwardRef(({ content = {} }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userDescriptionStyle = styleFilter(content.description);
  const layoutStyle = styleFilter(content.layout);
  // console.log(content.imagePosition);
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
        <EditableStyleable
          type="h3"
          style={{ ...userTitleStyle }}
          // name="title"
          module="title"
          data-oa-type="text"
        >
          {content?.title?.editorState}
        </EditableStyleable>

        <EditableStyleable
          type="p"
          style={{ ...userDescriptionStyle }}
          // name="title"
          module="description"
          data-oa-type="text"
        >
          {content?.description?.editorState}
        </EditableStyleable>
      </TextContainer>
    </Grid>
  );

  return (
    content && (
      <Grid
        item
        container
        ref={ref}
        columnSpacing={2}
        className={classes.componentContainer}
        sx={{ ...layoutStyle }}
      >
        <Grid item xs={6}>
          {content.imagePosition === "left" ? imageSection : textSection}
        </Grid>
        <Grid item xs={6}>
          {content.imagePosition === "left" ? textSection : imageSection}
        </Grid>
      </Grid>
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
