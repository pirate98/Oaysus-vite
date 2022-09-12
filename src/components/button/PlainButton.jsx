import { styled } from "@mui/system";
import Button from "@mui/material/Button";

import styles from "./Buttons.module.scss";

export const StyledButton = styled(Button)({
  boxShadow: "none",
  fontFamily: "Segoe UI",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "20px",
  letterSpacing: "0px",
  textAlign: "center",
  width: "max-content",
  padding: "0.5rem 1.5rem",
  textTransform: "none",

  // background: "#008060",
  "&:hover": {
    // background: "#0f5140",
  },
});

export function PlainButton({ children, color }) {
  return (
    <StyledButton
      className={styles.borderStyle}
      color={color}
      variant="contained"
    >
      {children}
    </StyledButton>
  );
}
