import { Grid } from "@mui/material";
import { Button } from "@/atoms/button";
import { SettingsCard } from "@/atoms/cards/settingsCard/SettingsCard";
import { H2 } from "@/atoms";

export default function General() {
  return (
    <>
      <SettingsCard>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <div>
            <H2 weight={600} mb={12}>
              App status
            </H2>
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
