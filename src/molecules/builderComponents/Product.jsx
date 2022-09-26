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
import { filterOnlyStyleValues, styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";
import { PlainButton } from "../../atoms";

const fn = forwardRef(({ content }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <Grid
      item
      container
      ref={ref}
      columnSpacing={1}
      className={classes.componentContainer}
      sx={{ ...styles.layout }}
    >
      <Grid item xs={6}>
        <img className={classes.image1} src={"/image/guy_1.jpg"} />
      </Grid>
      <Grid item xs={6} container spacing={2} alignContent="baseline">
        <Grid item sx={{ marginBottom: "2px" }}>
          <TextContainer>
            <EditableElement
              // hidden={true}
              style={{
                ...styles.product,
              }}
              name="product"
              data-oa-name="product"
              data-oa-type="text"
              type="h3"
            >
              {content.product.text}
            </EditableElement>
            <Grid container>
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={22}
                activeColor="rgba(248, 152, 29, 1)"
              />
              <p className={classes.starText}>5.0 Best Seller</p>
            </Grid>
            <EditableElement
              // hidden={true}
              style={{
                ...styles.description,
              }}
              name="description"
              data-oa-name="description"
              data-oa-type="text"
              type="p"
            >
              {content.description.text}
            </EditableElement>
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
          {/* <ButtonGroup fullWidth> */}
          <PlainButton variant="contained" sx={{ ...styles.buyButton }}>
            Buy Now
          </PlainButton>
          <PlainButton variant="contained" sx={{ ...styles.declineButton }}>
            Decline this offer
          </PlainButton>
        </Grid>
      </Grid>
    </Grid>
  );
});

const json = {
  name: "",
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
  reviews: {},
  product: {
    text: "Test T-shirt",
    color: "#000000",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "24px",
  },
  description: {
    text: `Include a short, benefit-driven description of what your product
    does and how it can improve your customer's life.`,
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
  title: {
    text: "",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    fontWeight: 600,
    fontColor: "#000000",
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
    fontColor: "#000000",
    padding: 0,
    margin: 0,
    visibility: true,
  },
  buyButton: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: "10px",
    backgroundColor: "#008060",
    color: "white",
    width: "100%",
  },
  declineButton: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: "10px",
    backgroundColor: "white",
    color: "#000000",
    width: "100%",
    border: "1px solid",
    borderColor: "rgba(201, 204, 207, 1)",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Product = fn;
