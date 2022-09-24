import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";

const fn = forwardRef(({ content = {} }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userDescriptionStyle = styleFilter(content.description);
  const layoutStyle = styleFilter(content.layout);

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
        <EditableElement
          type="h3"
          style={{ ...userTitleStyle }}
          // name="title"
          data-oa-name="title"
          data-oa-type="text"
        >
          {content.title && content.title.text}
        </EditableElement>
        <EditableElement
          type="p"
          style={{ ...userDescriptionStyle }}
          // name="title"
          data-oa-name="description"
          data-oa-type="text"
        >
          {content.description && content.description.text}
        </EditableElement>
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
  name: "",
  title: {
    text: "Headline Content 1",
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
    text: "You could highlight specific ingredients, materials, or functionality that make your product unique, and explain how it will improve the customer's life.",
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
    backgroundColor: "rgb(0, 128, 96)",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  layout: {
    paddingTop: "10px",
    paddingBottom: "10px",
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
