import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { H1, H6, Page } from "@/atoms";

import Billing from "./billing/Billing";
import General from "./general/General";
import classes from "./Settings.module.scss";

export default function Settings() {
  return (
    <Page>
      <Grid container flexDirection={"row"}>
        <nav className={classes.nav}>
          <H1 mb={16}>Settings</H1>
          <Box sx={{ marginTop: "16px", display: "inline-block" }}>
            <NavLink
              to={"/settings/general"}
              className={({ isActive }) =>
                isActive ? classes.textGreen : null
              }
            >
              <H6 mb={20} weight={500}>
                General
              </H6>
            </NavLink>
            <NavLink
              to={"/settings/billing"}
              className={({ isActive }) =>
                isActive ? classes.textGreen : null
              }
            >
              <H6 mb={20} weight={500}>
                Billing
              </H6>
            </NavLink>
          </Box>
        </nav>
        <Box sx={styles.rightSection}>
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

const styles = {
  rightSection: {
    flexGrow: 1,
    "& > div": {
      marginBottom: "24px",
    },
    width: "min-content",
  },
};
