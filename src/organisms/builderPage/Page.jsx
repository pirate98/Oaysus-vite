import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  TextContainer,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@shopify/polaris";
import ReactStars from "react-rating-stars-component";

import classes from "./Page.module.scss";

export function Page() {
  return (
    <>
      <div className={classes.titleContainer}>
        <p className={classes.headlineWhite}>
          Add a Test T-shirt to your order
        </p>
        <p className={classes.h2}>Exclusive offer expires in: 05:05</p>
      </div>
      <div
        className={classes.imageZone}
        style={{
          backgroundImage: false ? false : 'url("/image/empty-image-dark.svg")',
          backgroundSize: false ? "cover" : "unset",
        }}
      ></div>
      <section className={classes.buyBox}>
        <Grid container spacing={5} columnSpacing={4}>
          <Grid item xs={6}>
            <img className={classes.image1} src={"/image/guy_1.jpg"} />
          </Grid>
          <Grid item xs={6} container spacing={2} alignContent="baseline">
            <Grid item sx={{ marginBottom: "2px" }}>
              <TextContainer spacing="loose">
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
                  Include a short, benefit-driven description of what your
                  product does and how it can improve your customer's life.
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
          <Grid item xs={6}>
            <p className={classes.headline}>Headline Content 1</p>
            <Text variant="bodyLg" as="p">
              You could highlight specific ingredients, materials, or
              functionality that make your product unique, and explain how it
              will improve the customer's life.
            </Text>
          </Grid>
          <Grid item xs={6}>
            <div
              className={classes.image1}
              style={{
                backgroundImage: false
                  ? false
                  : 'url("/image/empty-image-dark.svg")',
                backgroundSize: false ? "cover" : "unset",
              }}
            ></div>
          </Grid>
          <Grid item xs={6}>
            <div
              className={classes.image1}
              style={{
                backgroundImage: false
                  ? false
                  : 'url("/image/empty-image-dark.svg")',
                backgroundSize: false ? "cover" : "unset",
              }}
            ></div>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.headline}>Headline Content 2</p>
            <Text variant="bodyLg" as="p">
              You could highlight specific ingredients, materials, or
              functionality that make your product unique, and explain how it
              will improve the customer's life.
            </Text>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.offer}>
              <p>Exclusive offer expires in: 05:05</p>
            </div>
          </Grid>
          <Grid container item xs={12}>
            <p className={classes.videoTitle}>Video Block Title</p>
            <div
              className={classes.imageZone}
              style={{
                backgroundImage: false
                  ? false
                  : 'url("/image/play.svg"), url("/image/empty-video.svg")',
                backgroundSize: false ? "cover" : "unset",
              }}
            ></div>
          </Grid>
          <Grid item container spacing={3}>
            <Grid item>
              <p className={classes.headline}>Headline Content 2</p>
              <Text variant="bodyLg" as="p">
                You could highlight specific ingredients, materials, or
                functionality that make your product unique, and explain how it
                will improve the customer's life.
              </Text>
            </Grid>
            <Grid item sx={{ width: "208px" }}>
              <Button primary fullWidth>
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <div className={classes.callToAction + " " + classes.headline}>
        Buy This T-Shirt Right Now{" "}
        <span className={classes.textGreen}>&nbsp;for $20.00</span>
        <Box sx={{ width: "208px", marginLeft: "30px" }}>
          <Button primary fullWidth>
            Buy Now
          </Button>
        </Box>
      </div>
    </>
  );
}
