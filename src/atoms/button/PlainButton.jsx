import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const PlainButton = styled((props) => (
  <Button {...props} variant="outlined" />
))({
  height: "36px",
  boxShadow: "none",
  fontFamily: "Segoe UI",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  textAlign: "center",
  // width: "max-content",
  padding: "0.5rem 1.5rem",
  textTransform: "none",

  "&:hover": {
    // background: "#0f5140",
  },
});
