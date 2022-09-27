import { forwardRef } from "react";

import Grid from "@mui/material/Grid";

import classes from "./.module.scss";
import { filterOnlyStyleValues } from "../../helpers/builder";
import { EditableStyleable } from "../../wrappers/";

const fn = forwardRef(({ content }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <Grid item xs={12} ref={ref} className={classes.componentContainer}>
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
            <EditableStyleable
              name="title"
              data-oa-name="title"
              data-oa-type="text"
              type="h3"
            >
              {content.title ? content.title.text : ""}
            </EditableStyleable>
          </Grid>
          <Grid item>
            <p
              data-oa-name="countdown"
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
    paddingTop: "37px",
    paddingRight: "10px",
    paddingBottom: "37px",
    paddingLeft: "10px",
    marginTop: "20px",
    marginBottom: "20px",
    marginLeft: "",
    marginRight: "",
    borderColor: "#008060",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Incentive2 = fn;
