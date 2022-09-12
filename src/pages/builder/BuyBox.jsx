import Grid from "@mui/material/Grid";

import classes from "./Builder.module.scss";
export function BuyBox() {
  return (
    <section className={classes.buyBox}>
      <Grid container spacing={5} columnSpacing={4}>
        <Grid item xs={6}>
          <img className={classes.image1} src={"/image/guy_1.jpg"} />
        </Grid>
        <Grid item xs={6}>
          <p className={classes.headline}>Test T-shirt</p>
          <p>
            Include a short, benefit-driven description of what your product
            does and how it can improve your customer's life.
          </p>
        </Grid>
        <Grid item xs={6}>
          <p className={classes.headline}>Headline Content 1</p>
          <p>
            You could highlight specific ingredients, materials, or
            functionality that make your product unique, and explain how it will
            improve the customer's life.
          </p>
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
          <p className={classes.headline}>Headline Content 1</p>
          <p>
            You could highlight specific ingredients, materials, or
            functionality that make your product unique, and explain how it will
            improve the customer's life.
          </p>
        </Grid>
      </Grid>
    </section>
  );
}
