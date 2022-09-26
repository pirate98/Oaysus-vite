import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import {
  TextContainer,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";
import { AddButton, PlainButton } from "../../atoms";

const fn = forwardRef(({ content }, ref) => {
  const titleStyle = styleFilter(content.title);
  const descriptionStyle = styleFilter(content.description);
  const layoutStyle = styleFilter(content.layout);
  const borderStyle = styleFilter(content.border);
  const buyButtonStyle = styleFilter(content.buyButton);

  return (
    // <Grid
    //   item
    //   container
    //   ref={ref}
    //   className={classes.componentContainer}
    //   // columnSpacing={2}
    //   spacing={2}
    // >
    <section className={classes.componentContainer} ref={ref}>
      <div style={{ ...layoutStyle, ...borderStyle, ...content.size }}>
        <Grid item>
          <EditableElement
            type="h3"
            className={classes.headline}
            style={{ ...titleStyle }}
            data-oa-name="title"
            data-oa-type="text"
          >
            {content.title.text}
          </EditableElement>
          <EditableElement
            type="p"
            style={{ ...descriptionStyle }}
            data-oa-name="description"
            data-oa-type="text"
          >
            {content.description.text}
          </EditableElement>
        </Grid>
        <Grid item sx={{ width: "208px" }}>
          <PlainButton variant="contained" sx={{ ...buyButtonStyle }}>
            Buy Now
          </PlainButton>
        </Grid>
      </div>
    </section>
  );
});

const json = {
  name: "",
  title: {
    text: "Headline Content 2",
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
    text: `You could highlight specific ingredients, materials, or functionality
    that make your product unique, and explain how it will improve the
    customer's life.`,
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "24px",
    fontSize: "16px",
    color: "#000000",
    fontStyle: "",
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "18px",
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
    paddingRight: "10px",
    paddingBottom: "",
    paddingLeft: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "",
    marginRight: "",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Content2 = fn;
