import { Grid } from "@mui/material";
import { Button } from "@/atoms/button";
import { H2, H3, Card } from "@/atoms";

export default function General() {
  return (
    <Card.Settings>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <div>
          <H2 weight={600} mb={12}>
            App status
          </H2>
          <H3 color={"muted"} mb={12}>
            Oaysus app is currently <b>deactivated.</b>
          </H3>
        </div>
        <div>
          <Button.Primary>Activate</Button.Primary>
        </div>
      </Grid>
    </Card.Settings>
  );
}
