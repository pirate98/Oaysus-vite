import { Button } from "@shopify/polaris";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import classes from "./builder/Builder.module.scss";
import { usePageButtons } from "../hooks";
import { BuyBox } from "./builder/BuyBox";

export default function Builder() {
  const buttonContent = (
    <>
      <Button>Preview on store</Button>
      <Button primary>Save</Button>
    </>
  );

  usePageButtons({ content: buttonContent });

  return (
    <Grid
      container
      spacing={0}
      sx={{
        flexGrow: 1,
        ".MuiGrid-item": {
          padding: 0,
        },
      }}
    >
      <Grid item xs={4} className={classes.leftSection}>
        <div className={classes.leftMenu}>
          <div>
            <p>Templates</p>
            <span></span>
          </div>
          <div className={classes.divActive}>
            <p>Components</p>
            <span></span>
          </div>
        </div>
      </Grid>
      <Grid item xs={8} className={classes.rightSection}>
        <div className={classes.titleContainer}>
          <p className={classes.customH1}>Add a Test T-shirt to your order</p>
          <p className={classes.h2}>Exclusive offer expires in: 05:05</p>
        </div>
        <div
          className={classes.imageZone}
          style={{
            backgroundImage: false
              ? false
              : 'url("/image/empty-image-dark.svg")',
            backgroundSize: false ? "cover" : "unset",
          }}
        ></div>
        <BuyBox />
      </Grid>
    </Grid>
  );
}
