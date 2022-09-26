import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { filterOnlyStyleValues } from "../../helpers/builder";
import { EditableStyleable } from "../../builderEditableStyleable/EditableStyleable";

const fn = forwardRef(({ content }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <Grid container item xs={12} ref={ref}>
      <EditableStyleable
        name="title"
        data-oa-name="title"
        data-oa-type="text"
        type="h3"
        style={{
          ...styles.title,
          display: content.title.visibility ? "inherit" : "none",
        }}
      >
        {content.title ? content.title.text : ""}
      </EditableStyleable>
      {/* <p className={classes.videoTitle}></p> */}
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
    text: "Video Block Title",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    fontWeight: 600,
    fontColor: "#000000",
    visibility: true,
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  video: {},
};

Object.defineProperty(fn, "json", { value: json });

export const Video = fn;
