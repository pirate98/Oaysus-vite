import { forwardRef, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Stack, Text } from "@shopify/polaris";
// import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";

import classes from "./.module.scss";
import { EditableWithToolBar } from "../../wrappers";
import { Button } from "@/atoms/button";
import { ImageSelector } from "./ImageSelector";
import variables from "@/assets/css/_variables.module.scss";
import { BuilderComponentProps } from "../../../../types/BuilderComponent.type";
import { filterOnlyStyleValues, makeEditorState } from "@/helpers/upsells";

const fn = forwardRef<HTMLDivElement>(
  ({ content, className }: BuilderComponentProps, ref) => {
    const styles = filterOnlyStyleValues(content);

    return (
      <div
        className={classes.componentContainer}
        style={{ backgroundColor: styles?.layout?.backgroundColor }}
        ref={ref}
      >
        <div className={classes.box}>
          <Grid
            // item
            container
            columnSpacing={4}
            // className={className ? ` ${className}` : ""}
            sx={{ ...styles?.layout, backgroundColor: "inherit" }}
          >
            <Grid
              item
              xs={6}
              className={
                content?.layout?.imagePosition === "right" ? classes.order1 : ""
              }
            >
              <ImageSelector content={content} style={styles?.image} />
            </Grid>
            <Grid item xs={6} container spacing={2} alignContent="baseline">
              <Grid item sx={{ marginBottom: "2px" }}>
                <TextContainer>
                  <EditableWithToolBar
                    // hidden={true}
                    style={{
                      ...styles?.title,
                    }}
                    module="title"
                  >
                    {content?.title?.editorState}
                  </EditableWithToolBar>
                  <Grid
                    container
                    sx={{
                      display: content?.reviews?.visibility ? "flex" : "none",
                    }}
                  >
                    <Rating
                      name="read-only"
                      value={content?.reviews?.rating}
                      readOnly
                    />
                    {/* <p className={classes.starText}>5.0 Best Seller</p> */}
                  </Grid>
                  <EditableWithToolBar
                    // hidden={true}
                    style={{
                      ...styles?.description,
                    }}
                    module="description"
                    data-oa-type="text"
                  >
                    {content?.description?.editorState}
                  </EditableWithToolBar>
                </TextContainer>
              </Grid>
              <Grid item xs={12}>
                <Stack distribution="fill" vertical spacing="tight">
                  <Stack distribution="equalSpacing">
                    <Text
                      color="subdued"
                      fontWeight="regular"
                      as="p"
                      variant="bodyMd"
                    >
                      Subtotal
                    </Text>
                    <Text
                      color="subdued"
                      fontWeight="regular"
                      as="p"
                      variant="bodyMd"
                    >
                      $ 20.00
                    </Text>
                  </Stack>
                  <Stack distribution="equalSpacing">
                    <Text
                      color="subdued"
                      fontWeight="regular"
                      as="p"
                      variant="bodyMd"
                    >
                      Taxes
                    </Text>
                    <Text
                      color="subdued"
                      fontWeight="regular"
                      as="p"
                      variant="bodyMd"
                    >
                      N/A
                    </Text>
                  </Stack>
                  <div className={classes.divider}></div>
                  <Stack distribution="equalSpacing">
                    <Text fontWeight="regular" as="p" variant="bodyMd">
                      Total
                    </Text>
                    <Text fontWeight="regular" as="p" variant="bodyMd">
                      $ 20.00
                    </Text>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                {/* <ButtonGroup fullWidth> */}
                <Button.Primary sx={{ ...styles?.buyButton }} fullWidth>
                  Buy Now
                </Button.Primary>
                <Button.Primary sx={{ ...styles?.declineButton }} fullWidth>
                  Decline this offer
                </Button.Primary>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
);

const json = {
  name: "",
  imageDisplayType: "single",
  layout: {
    imagePosition: "left", // not css?
    paddingTop: "42px",
    paddingRight: "",
    paddingBottom: "20px",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    backgroundColor: "#ffffff",
  },
  reviews: {
    visibility: true,
    rating: 2,
  },
  image: {
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#e0e0e0",
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
  customImages: [],
  title: {
    editorState: makeEditorState("Test T-shirt"),
    text: "Test T-shirt",
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
    fontWeight: "400",
    fontSize: "16px",
    fontColor: "#000000",
    padding: 0,
    margin: 0,
    visibility: true,
  },
  buyButton: {
    marginBottom: "10px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "0px",

    borderColor: "#008060",
    color: "#ffffff",
    backgroundColor: "#008060",

    "&:hover": {
      backgroundColor: variables.primaryHover,
    },
  },
  declineButton: {
    marginBottom: "10px",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",

    color: "#000000",
    borderColor: "#babfc3",
    backgroundColor: "#ffffff",

    "&:hover": {
      backgroundColor: "#f6f6f7",
    },
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Product = fn;
