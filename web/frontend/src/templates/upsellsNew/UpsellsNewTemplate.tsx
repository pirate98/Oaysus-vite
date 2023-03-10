import Grid from "@mui/material/Grid";

import { Page, Divider, Button } from "@/atoms";
import classes from "./UpsellsNewTemplate.module.scss";

interface Props {
  // backButtonText?: string;
  children?: React.ReactNode;
  // rightButtonText?: string;
  // rightButtonOnClick?: () => void;
  bottomButtonText?: string;
  bottomButtonOnClick?: () => void;
}

export function UpsellsNewTemplate({
  // backButtonText,
  children,
  // rightButtonText,
  // rightButtonOnClick,
  bottomButtonText,
  bottomButtonOnClick,
}: Props) {
  return (
    <Page>
      <Grid container wrap="nowrap" columnSpacing={5}>
        {/* <Grid item xs={2}>
          <section className={classes.left}>
            <Button.Back>{backButtonText}</Button.Back>
          </section>
        </Grid> */}
        <Grid item xs={12}>
          <section className={classes.middle}>
            {children}
            <Divider.Vertical />
            <Button.Upsell onClick={bottomButtonOnClick}>
              {bottomButtonText}
            </Button.Upsell>
          </section>
        </Grid>
        {/* <Grid item xs={2} sx={{ display: "flex", justifyContent: "end" }}>
          <section>
            <Button.Primary onClick={rightButtonOnClick}>
              {rightButtonText}
            </Button.Primary>
          </section>
        </Grid> */}
      </Grid>
    </Page>
  );
}
