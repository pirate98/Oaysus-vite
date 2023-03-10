import { forwardRef } from "react";

import { Grid } from "@mui/material";

import classes from "./.module.scss";
import { EditableWithToolBar } from "../../wrappers";
import { BuilderComponentProps } from "../../../../types/BuilderComponent.type";
import { filterOnlyStyleValues, makeEditorState } from "@/helpers/upsells";

const fn = forwardRef<HTMLDivElement>(
  ({ content, className }: BuilderComponentProps, ref) => {
    const styles = filterOnlyStyleValues(content);

    return (
      <div
        className={
          classes.incentiveContainer + (className ? ` ${className}` : "")
        }
        ref={ref}
        style={{
          ...styles?.layout,
          backgroundImage: content?.backgroundPreview,
        }}
      >
        <EditableWithToolBar
          // hidden={true}
          style={{
            ...styles?.title,
            display: content?.title.visibility ? "inherit" : "none",
          }}
          module="title"
          data-oa-type="text"
          className={classes.title}
        >
          {content?.title?.editorState}
        </EditableWithToolBar>
        <Grid
          justifyContent={"center"}
          container
          sx={{
            whiteSpace: "pre-wrap",
            ...styles?.subTitle,
            display: content?.subTitle.visibility ? "inherit" : "none",
          }}
        >
          <Grid item>
            <EditableWithToolBar module="subTitle" data-oa-type="text">
              {content?.subTitle?.editorState}
            </EditableWithToolBar>
          </Grid>
          <Grid item>
            <p
              data-oa-type="duration"
              style={{
                display: content?.countdown.visibility ? "inherit" : "none",
              }}
            >
              {content?.countdown && content?.countdown.duration + ":00"}
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
);

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
  layout: {
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundColor: "#008060",
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
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

export const Exclusive = fn;
