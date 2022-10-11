import { styled } from "@mui/system";
import { default as MuiButton } from "@mui/material/Button";

import variables from "@/assets/css/_variables.module.scss";

export const Button = styled((props) => (
  <MuiButton variant="outlined" {...props} />
))({
  fontFamily: variables.fontFamily,
  fontSize: "16px",
  height: "44px",
  boxShadow: "none",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  textAlign: "center",
  padding: "0.5rem 1.5rem",
  textTransform: "none",

  "&:hover": {
    boxShadow: "none",
  },
});
