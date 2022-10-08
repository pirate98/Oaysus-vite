import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink, Route, Routes } from "react-router-dom";

import Billing from "./billing/Billing";
import General from "./general/General";
import classes from "./Settings.module.scss";

export default function Settings() {
  return (
    <Grid container flexDirection={"row"}>
      <nav className={classes.nav}>
        <h1 className={classes.h1Custom}>Settings</h1>
        <NavLink
          to={"/settings/general"}
          className={({ isActive }) => (isActive ? classes.textGreen : null)}
        >
          <h2 className={classes.h2Custom}>General</h2>
        </NavLink>
        <NavLink
          to={"/settings/billing"}
          className={({ isActive }) => (isActive ? classes.textGreen : null)}
        >
          <h2 className={classes.h2Custom}>Billing</h2>
        </NavLink>
      </nav>
      <Box
        sx={{
          padding: "92px 52px",
          flexGrow: 1,
          "& > div": {
            marginBottom: "24px",
          },
          width: "min-content",
          "& p": {
            color: "rgba(109, 113, 117, 1)",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0px",
            marginBottom: "12px",
          },
        }}
      >
        <Routes>
          <Route path="/billing" element={<Billing />} />
          <Route path="/*" element={<General />} />
        </Routes>
      </Box>
    </Grid>
  );
}
