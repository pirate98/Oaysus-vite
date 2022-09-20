import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";

export const Incentive1Component = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  return (
    content && (
      <Grid ref={ref}>
        <div className={classes.titleContainer}>
          <p style={{ ...userTitleStyle }}>
            {content.title ? content.title.text : ""}
          </p>
          <p style={{ ...userSubTitleStyle }}>
            {content.subTitle ? content.subTitle.text : ""}{" "}
            <span>{content.countdown && content.countdown.duration}</span>
          </p>
        </div>
      </Grid>
    )
  );
});
