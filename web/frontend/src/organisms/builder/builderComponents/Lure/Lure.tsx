import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import classes from "./.module.scss";
import { EditableWithToolBar } from "../../wrappers";

import { BuilderComponentProps } from "../../../../types/BuilderComponent.type";
import { filterOnlyStyleValues, makeEditorState } from "@/helpers/upsells";

const fn = forwardRef<HTMLDivElement>(
  ({ content, className }: BuilderComponentProps, ref) => {
    const styles = filterOnlyStyleValues(content);

    return (
      <div
        className={classes.componentContainer}
        style={{ backgroundColor: styles?.layout?.backgroundColor }}
        ref={ref}
      >
        <div className={classes.box}>
          <div
            className={classes.offer}
            style={{ ...styles?.layout, ...styles?.background }}
          >
            <Grid
              justifyContent={"center"}
              container
              sx={{
                whiteSpace: "pre-wrap",
                ...styles?.title,
                display: content?.title.visibility ? "inherit" : "none",
              }}
            >
              <Grid item>
                <EditableWithToolBar module="title" data-oa-type="text">
                  {content?.title?.editorState}
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
        </div>
      </div>
    );
  }
);

const json = {
  name: "",
  layout: {
    paddingTop: "37px",
    paddingRight: "10px",
    paddingBottom: "37px",
    paddingLeft: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "",
    marginRight: "",
    borderColor: "#008060",
    backgroundColor: "#ffffff",
  },
  title: {
    editorState: makeEditorState("Exclusive offer expires in: "),
    fontFamily: "Roboto",
    lineHeight: "35px",
    fontSize: "30px",
    fontWeight: "400",
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
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundColor: "#008060",
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Lure = fn;
