import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import { Card, Divider } from "@/atoms";
import classes from "./BuilderCard.module.scss";

import componentsData from "@/data/componentsData";
import { getProductImageUrl } from "@/helpers";

export function BuilderCard() {
  const {
    upsells: { testTrigger, upsells },
  } = useSelector((state) => state);

  return upsells.map((upsell, idx) => {
    const imageUrl = getProductImageUrl(upsell);
    return (
      <Fragment key={idx}>
        <Divider.WithText text={`Post purchase offer #${idx + 1}`} />
        <Card.Settings className={classes.cardFlex}>
          <Grid container>
            <section>
              <div
                className={classes.imagePreview}
                style={{
                  backgroundImage: imageUrl,
                }}
              >
                {!imageUrl && (
                  <img src={componentsData.PLACEHOLDER_IMAGE_URL} />
                )}
              </div>
            </section>
            <section className={classes.upsellRight}>yes</section>
          </Grid>
        </Card.Settings>
      </Fragment>
    );
  });
}
