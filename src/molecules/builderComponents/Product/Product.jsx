import { forwardRef, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Stack, Text } from "@shopify/polaris";
// import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";

import classes from "./.module.scss";
import { filterOnlyStyleValues, makeEditorState } from "../../helpers/builder";
import { EditableWithToolBar } from "../../wrappers/";
import { BuilderButton } from "../../../atoms";
import { ImageSelector } from "./ImageSelector";

const fn = forwardRef(({ content, className }, ref) => {
  const styles = filterOnlyStyleValues(content);

  const [value, setValue] = useState(2);

  return (
    <div className={classes.componentContainer}>
      <Grid
        // item
        container
        ref={ref}
        columnSpacing={4}
        className={className ? ` ${className}` : ""}
        sx={{ ...styles.layout }}
      >
        <Grid
          item
          xs={6}
          className={content.imagePosition === "right" ? classes.order1 : ""}
        >
          <ImageSelector content={content} style={styles.image} />
        </Grid>
        <Grid item xs={6} container spacing={2} alignContent="baseline">
          <Grid item sx={{ marginBottom: "2px" }}>
            <TextContainer>
              <EditableWithToolBar
                // hidden={true}
                style={{
                  ...styles.title,
                }}
                module="title"
                type="h3"
              >
                {content?.title?.editorState}
              </EditableWithToolBar>
              <Grid
                container
                sx={{
                  display: content?.reviews?.visibility ? "flex" : "none",
                }}
              >
                <Rating name="read-only" value={value} readOnly />
                {/* <p className={classes.starText}>5.0 Best Seller</p> */}
              </Grid>
              <EditableWithToolBar
                // hidden={true}
                style={{
                  ...styles.description,
                }}
                name="description"
                module="description"
                data-oa-type="text"
                type="p"
              >
                {content.description?.editorState}
              </EditableWithToolBar>
            </TextContainer>
          </Grid>
          <Grid item xs={12}>
            <Stack distribution="fill" vertical spacing="tight">
              <Stack distribution="equalSpacing">
                <Text color="subdued" fontWeight="regular">
                  Subtotal
                </Text>
                <Text color="subdued" fontWeight="regular">
                  $ 20.00
                </Text>
              </Stack>
              <Stack distribution="equalSpacing">
                <Text color="subdued" fontWeight="regular">
                  Taxes
                </Text>
                <Text color="subdued" fontWeight="regular">
                  N/A
                </Text>
              </Stack>
              <div className={classes.divider}></div>
              <Stack distribution="equalSpacing">
                <Text fontWeight="regular">Total</Text>
                <Text fontWeight="regular">$ 20.00</Text>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            {/* <ButtonGroup fullWidth> */}
            <BuilderButton sx={{ ...styles.buyButton }}>Buy Now</BuilderButton>
            <BuilderButton color={"white"} sx={{ ...styles.declineButton }}>
              Decline this offer
            </BuilderButton>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
});

const json = {
  name: "",
  imagePosition: "left",
  imageDisplayType: "single",
  layout: {
    paddingTop: "42px",
    paddingRight: "",
    paddingBottom: "20px",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  reviews: {
    visibility: true,
  },
  image: {
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  images: [
    "url(/mockData/flowers.jpg)",
    "url(/mockData/puppy.jpg)",
    "url(/mockData/strategy.jpg)",
    "url(/image/guy_1.jpg)",
    "url(/mockData/ayak.jpg)",
    "url(/mockData/strategy.jpg)",
    "url(/image/guy_1.jpg)",
    "url(/mockData/ayak.jpg)",
  ],
  title: {
    editorState: makeEditorState("Test T-shirt"),
    color: "#000000",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "24px",
  },
  description: {
    editorState:
      makeEditorState(`Include a short, benefit-driven description of what your product\
    does and how it can improve your customer's life.`),
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "24px",
    fontSize: "16px",
    color: "#000000",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  subTitle: {
    editorState: makeEditorState(""),
    price: 20,
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontWeight: 400,
    fontSize: "16px",
    fontColor: "#000000",
    padding: 0,
    margin: 0,
    visibility: true,
  },
  buyButton: {
    marginBottom: "10px",
  },
  declineButton: {
    marginBottom: "10px",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Product = fn;
