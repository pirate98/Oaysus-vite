import { styled } from "@mui/system";
import Button from "@mui/material/Button";

import variables from "../../assets/css/_variables.module.scss";

export const PlainButton = styled((props) => (
  <Button variant="outlined" {...props} />
))({
  height: "36px",
  boxShadow: "none",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  textAlign: "center",
  // width: "max-content",
  padding: "0.5rem 1.5rem",
  textTransform: "none",

  "&:hover": {
    background: variables.primaryHover,
  },
});
