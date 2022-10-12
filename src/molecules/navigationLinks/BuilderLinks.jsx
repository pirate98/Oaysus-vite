import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

import { Button } from "@/atoms/button";
import classes from "./.module.scss";

export function BuilderLinks() {
  return (
    <>
      <section className={classes.leftSection}>
        <Button.Back>Exit Builder</Button.Back>
      </section>
      <section className={classes.buttonGroup}>
        <Button.Secondary size={"sm"}>Preview on store</Button.Secondary>
        <Button.Primary size={"sm"}>Save template</Button.Primary>
      </section>
    </>
  );
}
