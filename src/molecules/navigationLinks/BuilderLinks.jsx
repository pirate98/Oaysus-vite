import { Button } from "@shopify/polaris";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import classes from "./.module.scss";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

export function BuilderLinks() {
  return (
    <>
      <section className={classes.leftSection}>
        <NavLink to="/">
          <Grid container alignItems={"center"}>
            <ArrowBackIosNewIcon sx={{ height: "15px" }} />
            <p>Exit Builder</p>
          </Grid>
        </NavLink>
      </section>
      <section className={classes.buttonGroup}>
        <Button>Preview on store</Button>
        <Button primary>Save template</Button>
      </section>
    </>
  );
}
