import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import { Card, Divider } from "@/atoms";
import classes from "./BuilderCard.module.scss";

import componentsData from "@/data/componentsData";
import { getProductInfo } from "@/helpers";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export function BuilderCard() {
  const {
    upsells: { upsells },
  } = useSelector((state) => state);

  return upsells.map((upsell, idx) => {
    const { productImageUrl, titleEditorState } = getProductInfo(upsell);
    console.log({ productImageUrl, titleEditorState });
    return (
      <Fragment key={idx}>
        <Divider.WithText text={`Post purchase offer #${idx + 1}`} />
        <Card.Settings className={classes.cardFlex}>
          <Grid container>
            <Grid item>
              <Grid container sx={{ gap: "16px" }}>
                <div
                  className={classes.imagePreview}
                  style={{
                    backgroundImage: productImageUrl,
                  }}
                >
                  {!imageUrl && (
                    <img src={componentsData.PLACEHOLDER_IMAGE_URL} />
                  )}
                </div>
                <div>
                  <h2 className={classes.customH2}>{"hi"}</h2>
                  <h5 className={classes.h5Muted}>10% Off</h5>
                  <h5 className={classes.h5Muted}>Free Shipping</h5>
                </div>
              </Grid>
            </Grid>
            <Grid item sx={{ margin: "0 60px" }}>
              yes
            </Grid>
          </Grid>
        </Card.Settings>
      </Fragment>
    );
  });
}
