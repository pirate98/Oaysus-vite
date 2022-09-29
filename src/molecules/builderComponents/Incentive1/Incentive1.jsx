import { forwardRef } from "react";

import classes from "./.module.scss";

import { makeEditorState, styleFilter } from "../../helpers/builder";
import { Grid } from "@mui/material";
import { EditableWithToolBar } from "../../wrappers/";

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
        <EditableWithToolBar
          // hidden={true}
          style={{
            ...userTitleStyle,
            display: content.title.visibility ? "inherit" : "none",
          }}
          name="title"
          module="title"
          data-oa-type="text"
          type="h3"
          className={classes.title}
        >
          {content?.title?.editorState}
        </EditableWithToolBar>
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
            <EditableWithToolBar
              name="subTitle"
              module="subTitle"
              data-oa-type="text"
              type="p"
            >
              {content?.subTitle?.editorState}
            </EditableWithToolBar>
          </Grid>
          <Grid item>
            <p
              module="countdown"
              data-oa-type="duration"
              style={{
                display: content.countdown.visibility ? "inherit" : "none",
              }}
            >
              {content.countdown && content.countdown.duration + ":00"}
            </p>
          </Grid>
        </Grid>
      </div>
    )
  );
});

const json = {
  name: "",
  title: {
    editorState: makeEditorState("Add a Test T-shirt to your order"),
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "24px",
    color: "#ffffff",
    paddingTop: "2px",
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
    editorState: makeEditorState("Exclusive offer expires in: "),
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "18px",
    color: "#ffffff",
    paddingTop: "",
    paddingLeft: "",
    paddingRight: "",
    paddingBottom: "",
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
    backgroundColor: "#008060",
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  layout: {
    paddingTop: "20px",
    paddingRight: "10px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Incentive1 = fn;
