import { styled } from "@mui/system";
import { default as MuiButton } from "@mui/material/Button";

import variables from "@/assets/css/_variables.module.scss";

export const Button = styled(({ size, ...props }) => (
  <MuiButton
    variant="outlined"
    {...props}
    sx={{
      height: size === "sm" ? "36px" : "44px",
      fontSize: size === "sm" ? "14px" : "16px",
      padding: size === "sm" ? "0 22px" : "0.5rem 1.5rem",
    }}
  />
))({
  fontFamily: variables.fontFamily,
  boxShadow: "none",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  textAlign: "center",
  textTransform: "none",
  display: "flex",
  gap: "11px",

  "&:hover": {
    boxShadow: "none",
  },
});
