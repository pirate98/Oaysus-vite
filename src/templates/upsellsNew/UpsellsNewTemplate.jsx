import Grid from "@mui/material/Grid";

import { Page, Divider, Button } from "@/atoms";
import classes from "./UpsellsNewTemplate.module.scss";

export function UpsellsNewTemplate({
  backButtonText,
  children,
  rightButtonText,
  rightButtonOnClick,
  bottomButtonText,
  bottomButtonOnClick,
}) {
  return (
    <Page>
      <Grid container wrap="nowrap" columnSpacing={5}>
        <Grid item xs={2}>
          <section className={classes.left}>
            <Button.Back>{backButtonText}</Button.Back>
          </section>
        </Grid>
        <Grid item xs={8}>
          <section className={classes.middle}>
            {children}
            <Divider.Vertical />
            <Button.Upsell onClick={bottomButtonOnClick}>
              {bottomButtonText}
            </Button.Upsell>
          </section>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "end" }}>
          <section>
            <Button.Primary onClick={rightButtonOnClick}>
              {rightButtonText}
            </Button.Primary>
          </section>
        </Grid>
      </Grid>
    </Page>
  );
}
