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

export const Product = forwardRef(({ content }, ref) => {
  return (
    <Grid item container ref={ref}>
      <Grid item xs={6}>
        <img className={classes.image1} src={"/image/guy_1.jpg"} />
      </Grid>
      <Grid item xs={6} container spacing={2} alignContent="baseline">
        <Grid item sx={{ marginBottom: "2px" }}>
          <TextContainer>
            <Text variant="headingXl" as="h3">
              Test T-shirt
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
              Include a short, benefit-driven description of what your product
              does and how it can improve your customer's life.
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
