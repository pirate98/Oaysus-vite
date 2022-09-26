import { forwardRef } from "react";

import classes from "./.module.scss";

import { styleFilter } from "../helpers/builder";
import { EditableElement } from "../../atoms/builderInputs";
import { Grid } from "@mui/material";

const fn = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);
  const componentBackground = styleFilter(content.background);
  const componentLayout = styleFilter(content.layout);

  return (
    content && (
      <div
        className={classes.incentiveContainer}
        style={{ ...componentBackground, ...componentLayout }}
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
          {content.title ? content.title.text : ""}
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
              {content.subTitle ? content.subTitle.text : ""}
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

const json = {
  name: "",
  title: {
    text: "Add a Test T-shirt to your order",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    color: "#ffffff",
    paddingTop: "16px",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "18px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  subTitle: {
    text: "Exclusive offer expires in: ",
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "18px",
    color: "#ffffff",
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "14px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
    visibility: true,
  },
  countdown: {
    duration: "5",
    visibility: true,
  },
  background: {
    backgroundColor: "rgb(0, 128, 96)",
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  layout: {
    paddingTop: "22px",
    paddingRight: "10px",
    paddingBottom: "2px",
    paddingLeft: "10px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Incentive1 = fn;
