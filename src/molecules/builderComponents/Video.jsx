import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

const fn = forwardRef(({ content }, ref) => {
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

const json = {
  title: {
    text: "",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    fontWeight: 600,
    fontColor: "black",
    margin: "0 0 21px 0",
    visibility: true,
  },
  video: {},
};

Object.defineProperty(fn, "json", { value: json });

export const Video = fn;
