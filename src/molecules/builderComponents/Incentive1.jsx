import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";

export const Incentive1 = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  return (
    content && (
      <Grid ref={ref}>
        <div className={classes.titleContainer}>
          <p style={{ ...userTitleStyle }} name="title">
            {content.title
              ? content.title.text
              : "Add a Test T-shirt to your order"}
          </p>
          <p style={{ ...userSubTitleStyle }} name="subtitle">
            {content.subTitle ? content.subTitle.text : "Exclusive offer"}
            <span>{content.countdown && content.countdown.duration}</span>
          </p>
        </div>
      </Grid>
    )
  );
});
