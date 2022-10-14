import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { NavLink, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import classes from "./.module.scss";

export function Back({ children, to = "/" }) {
  const navigate = useNavigate();

  return (
    <Grid
      container
      alignItems={"center"}
      wrap="nowrap"
      className={classes.navLink}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIosNewIcon sx={{ height: "15px" }} />
      <p>{children}</p>
    </Grid>
  );
}
