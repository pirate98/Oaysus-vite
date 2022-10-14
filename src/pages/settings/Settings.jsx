import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Page } from "@/atoms";

import Billing from "./billing/Billing";
import General from "./general/General";
import classes from "./Settings.module.scss";

export default function Settings() {
  return (
    <Page>
      <Grid container flexDirection={"row"}>
        <nav className={classes.nav}>
          <h1 className={classes.h1}>Settings</h1>
          <Box sx={{ marginTop: "16px", display: "inline-block" }}>
            <NavLink
              to={"/settings/general"}
              className={({ isActive }) =>
                isActive ? classes.textGreen : null
              }
            >
              <h2 className={classes.h2Custom}>General</h2>
            </NavLink>
            <NavLink
              to={"/settings/billing"}
              className={({ isActive }) =>
                isActive ? classes.textGreen : null
              }
            >
              <h2 className={classes.h2Custom}>Billing</h2>
            </NavLink>
          </Box>
        </nav>
        <Box
          sx={{
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
            <Route path="/general" element={<General />} />
            <Route path="/*" element={<Navigate to="/settings/general" />} />
          </Routes>
        </Box>
      </Grid>
    </Page>
  );
}
