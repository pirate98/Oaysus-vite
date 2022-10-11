import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

import { Button } from "@/atoms/button";
import classes from "./.module.scss";

export function BuilderLinks() {
  return (
    <>
      <section className={classes.leftSection}>
        <NavLink to="/" className={classes.navLink}>
          <Grid container alignItems={"center"}>
            <Button.Back>Exit Builder</Button.Back>
          </Grid>
        </NavLink>
      </section>
      <section className={classes.buttonGroup}>
        <Button.Secondary size={"sm"}>Preview on store</Button.Secondary>
        <Button.Primary size={"sm"}>Save template</Button.Primary>
      </section>
    </>
  );
}
