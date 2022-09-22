import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

const fn = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

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
        <Text style={{ ...userTitleStyle }} variant="headingXl" as="h3">
          {content.title && content.title.text}
        </Text>
        <Text variant="bodyLg" as="p" style={{ ...userSubTitleStyle }}>
          {content.subTitle && content.subTitle.text}
        </Text>
      </TextContainer>
    </Grid>
  );

  return (
    content && (
      <Grid item container ref={ref} className={classes.componentContainer}>
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
  subTitle: {
    text: "You could highlight specific ingredients, materials, or functionality that make your product unique, and explain how it will improve the customer's life.",
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

export const Content1 = fn;
