import Grid from "@mui/material/Grid";
import {
  TextContainer,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@shopify/polaris";
import { forwardRef } from "react";
import ReactStars from "react-rating-stars-component";

import classes from "./.module.scss";

const fn = forwardRef(({ content }, ref) => {
  return (
    <Grid
      item
      container
      ref={ref}
      columnSpacing={1}
      className={classes.componentContainer}
    >
      <Grid item xs={6}>
        <img className={classes.image1} src={"/image/guy_1.jpg"} />
      </Grid>
      <Grid item xs={6} container spacing={2} alignContent="baseline">
        <Grid item sx={{ marginBottom: "2px" }}>
          <TextContainer>
            <Text variant="headingXl" as="h3">
              {content.productDescription.title}
            </Text>
            <Grid container alignItems="">
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={22}
                activeColor="rgba(248, 152, 29, 1)"
              />
              <p className={classes.starText}>5.0 Best Seller</p>
            </Grid>
            <Text variant="bodyLg" as="p">
              {content.productDescription.text}
            </Text>
          </TextContainer>
        </Grid>
        <Grid item xs={12}>
          <Stack distribution="fill" vertical spacing="tight">
            <Stack distribution="equalSpacing">
              <Text color="subdued" fontWeight="semibold">
                Subtotal
              </Text>
              <Text color="subdued" fontWeight="semibold">
                $ 20.00
              </Text>
            </Stack>
            <Stack distribution="equalSpacing">
              <Text color="subdued" fontWeight="semibold">
                Taxes
              </Text>
              <Text color="subdued" fontWeight="semibold">
                N/A
              </Text>
            </Stack>
            <div className={classes.divider}></div>
            <Stack distribution="equalSpacing">
              <Text fontWeight="semibold">Total</Text>
              <Text fontWeight="semibold">$ 20.00</Text>
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <ButtonGroup fullWidth>
            <Button fullWidth primary>
              Buy Now
            </Button>
            <Button fullWidth>Decline this offer</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
});

const json = {
  name: "",
  layout: {
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  reviews: {},
  productSelected: {},
  productDescription: {
    title: "Test T-shirt",
    text: `Include a short, benefit-driven description of what your product
    does and how it can improve your customer's life.`,
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    color: "#ffffff",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  title: {
    text: "",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    fontWeight: 600,
    fontColor: "black",
    margin: "0 0 21px 0",
    visibility: true,
  },
  subTitle: {
    text: "",
    price: 20,
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontWeight: 400,
    fontSize: "16px",
    fontColor: "black",
    padding: 0,
    margin: 0,
    visibility: true,
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Product = fn;
