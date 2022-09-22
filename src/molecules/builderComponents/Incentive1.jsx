import { forwardRef } from "react";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";
import { Grid } from "@mui/material";

export const Incentive1 = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);
  const componentStyle = styleFilter(content.background);

  return (
    content && (
      <div
        className={classes.incentiveContainer}
        style={{ ...componentStyle }}
        ref={ref}
      >
        <EditableElement
          // hidden={true}
          style={{
            ...userTitleStyle,
            display: content.title.visibility ? "inherit" : "none",
          }}
          name="title"
          data-oa-name="title"
          data-oa-type="text"
          type="p"
        >
          {content.title
            ? content.title.text
            : "Add a Test T-shirt to your order"}
        </EditableElement>
        <Grid
          justifyContent={"center"}
          container
          sx={{
            whiteSpace: "pre-wrap",
            ...userSubTitleStyle,
            display: content.subTitle.visibility ? "inherit" : "none",
          }}
        >
          <Grid item>
            <EditableElement
              name="subTitle"
              data-oa-name="subTitle"
              data-oa-type="text"
              type="p"
            >
              {content.subTitle ? content.subTitle.text : "Exclusive offer"}
            </EditableElement>
          </Grid>
          <Grid item>
            <EditableElement
              type="p"
              data-oa-name="countdown"
              data-oa-type="duration"
              style={{
                display: content.countdown.visibility ? "inherit" : "none",
              }}
            >
              {content.countdown && content.countdown.duration}
            </EditableElement>
          </Grid>
        </Grid>
      </div>
    )
  );
});
