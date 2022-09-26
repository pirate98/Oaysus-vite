import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import classes from "./.module.scss";
import { EditableElement } from "../../atoms/builderInputs";
import { filterOnlyStyleValues } from "../helpers/builder";

const fn = forwardRef(({ content }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <Grid item xs={12} ref={ref}>
      <div
        className={classes.offer}
        style={{ ...styles.background, ...styles.layout }}
      >
        <Grid
          justifyContent={"center"}
          container
          sx={{
            whiteSpace: "pre-wrap",
            ...styles.title,
            display: content.title.visibility ? "inherit" : "none",
          }}
        >
          <Grid item>
            <EditableElement
              name="title"
              data-oa-name="title"
              data-oa-type="text"
              type="h3"
            >
              {content.title ? content.title.text : ""}
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
    </Grid>
  );
});

const json = {
  name: "",
  title: {
    text: "Exclusive offer expires in: ",
    fontFamily: "Roboto",
    lineHeight: "35px",
    fontSize: "30px",
    fontWeight: "600",
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
    borderColor: "rgb(0, 128, 96)",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Incentive2 = fn;
