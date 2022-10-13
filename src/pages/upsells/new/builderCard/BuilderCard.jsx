import { Fragment } from "react";

import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

import { Card, Divider, Menu } from "@/atoms";
import classes from "./BuilderCard.module.scss";

import componentsData from "@/data/componentsData";
import { getProductInfo } from "@/helpers";
import { EditableTitle } from "@/molecules";

export function BuilderCard() {
  const {
    upsells: { upsells },
  } = useSelector((state) => state);

  return upsells.map((upsell, idx) => {
    const { productImageUrl, titleText } = getProductInfo(upsell);
    // console.log({ productImageUrl, titleText });
    return (
      <Fragment key={idx}>
        <Divider.WithText
          textElement={
            <EditableTitle
              className={classes.editableUpsellTitle}
              type="h2"
              text={`Post purchase offer #${idx + 1}`}
            />
          }
        />
        <Card.Settings className={classes.builderCard}>
          <Menu.HorizontalDrop className={classes.editMenu} />
          <Grid container>
            <Grid item>
              <Grid container sx={{ gap: "16px" }}>
                <div
                  className={classes.imagePreview}
                  style={{
                    backgroundImage: productImageUrl,
                  }}
                >
                  {!productImageUrl && (
                    <img src={componentsData.PLACEHOLDER_IMAGE_URL} />
                  )}
                </div>
                <Grid
                  item
                  sx={{ display: "flex" }}
                  justifyContent="center"
                  flexDirection={"column"}
                >
                  <h2 className={classes.customH2}>{titleText}</h2>
                  <h5 className={classes.h5Muted}>10% Off</h5>
                  <h5 className={classes.h5Muted}>Free Shipping</h5>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{ margin: "0 0 0 40px", display: "flex" }}
              alignItems="center"
            >
              <Grid container>
                <Grid
                  item
                  sx={{ padding: "0 36px", borderRight: "1px solid #BABFC3" }}
                >
                  <div>
                    <h4 className={classes.h4_2}>Views</h4>
                    <p className={classes.h4Muted}>0 </p>
                  </div>
                </Grid>
                <Grid
                  item
                  sx={{ padding: "0 36px", borderRight: "1px solid #BABFC3" }}
                >
                  <div>
                    <h4 className={classes.h4_2}>Conversion</h4>
                    <p className={classes.h4Muted}>0%</p>
                  </div>
                </Grid>
                <Grid
                  item
                  sx={{ padding: "0 36px", borderRight: "1px solid #BABFC3" }}
                >
                  <div>
                    <h4 className={classes.h4_2}>Total $</h4>
                    <p className={classes.h4Muted}>$0.00</p>
                  </div>
                </Grid>
                <Grid item sx={{ padding: "0 36px" }}>
                  <div>
                    <h4 className={classes.h4_2}>$ / Visit</h4>
                    <p className={classes.h4Muted}>$0.00</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card.Settings>
      </Fragment>
    );
  });
}
