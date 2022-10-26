import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";

import { H1, H6 } from "@/atoms";

export function NavigationPart({ sx }: { sx: Record<any, any> }) {
  return (
    <Box sx={sx}>
      <H1 mb={16}>Settings</H1>
      <Box sx={{ marginTop: "16px", display: "inline-block" }}>
        <NavLink
          to={"/settings/general"}
          className={({ isActive }) => (isActive ? "text_green" : undefined)}
        >
          <H6 mb={20} weight={500}>
            General
          </H6>
        </NavLink>
        <NavLink
          to={"/settings/billing"}
          className={({ isActive }) => (isActive ? "text_green" : undefined)}
        >
          <H6 mb={20} weight={500}>
            Billing
          </H6>
        </NavLink>
      </Box>
    </Box>
  );
}
