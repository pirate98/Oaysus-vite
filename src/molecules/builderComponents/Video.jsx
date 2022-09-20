import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export const Video = forwardRef(({ content }, ref) => {
  return (
    <Grid container item xs={12} ref={ref}>
      <p className={classes.videoTitle}>Video Block Title</p>
      <div
        className={classes.imageZone}
        style={{
          backgroundImage: false
            ? false
            : 'url("/image/play.svg"), url("/image/empty-video.svg")',
          backgroundSize: false ? "cover" : "unset",
        }}
      ></div>
    </Grid>
  );
});
