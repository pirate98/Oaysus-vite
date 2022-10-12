import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

import classes from "./.module.scss";

export function Back({ children, to = "/" }) {
  return (
    <NavLink to={to} className={classes.navLink}>
      <Grid container alignItems={"center"} wrap="nowrap">
        <ArrowBackIosNewIcon sx={{ height: "15px" }} />
        <p>{children}</p>
      </Grid>
    </NavLink>
  );
}
