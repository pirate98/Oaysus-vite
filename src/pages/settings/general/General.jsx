import { Grid } from "@mui/material";
import { Button } from "@/atoms/button";
import { SettingsCard } from "@/atoms/cards/settingsCard/SettingsCard";
import classes from "./General.module.scss";

export default function General() {
  return (
    <>
      <SettingsCard>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <div>
            <h3 className={classes.h3Custom}>App status</h3>
            <p>
              Oaysus app is currently <b>deactivated.</b>
            </p>
          </div>
          <div>
            <Button.Primary>Activate</Button.Primary>
          </div>
        </Grid>
      </SettingsCard>
    </>
  );
}
