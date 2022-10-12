import Grid from "@mui/material/Grid";

import { Page, Divider, Button } from "@/atoms";
import classes from "./UpsellNew.module.scss";

export function UpsellNew({
  backButtonText,
  children,
  rightButtonText,
  rightButtonOnClick,
  bottomButtonText,
  bottomButtonOnClick,
}) {
  return (
    <Page>
      <Grid container wrap="nowrap">
        <section className={classes.left}>
          <Button.Back>{backButtonText}</Button.Back>
        </section>
        <section className={classes.middle}>
          {children}
          <Divider.Vertical />
          <Button.Upsell onClick={bottomButtonOnClick}>
            {bottomButtonText}
          </Button.Upsell>
        </section>
        <div>
          <Button.Primary onClick={rightButtonOnClick}>
            {rightButtonText}
          </Button.Primary>
        </div>
      </Grid>
    </Page>
  );
}
