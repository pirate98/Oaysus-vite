import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)({
  boxShadow: "none",
  background: "#008060",
  borderRadius: "6px",
  color: "white",
  "&:hover": {
    // background: "#0f5140",
  },
  "&::before": {
    content: "url(/svg/add.svg)",
    marginRight: "0.5rem",
    height: "19px",
  },
});

export function AddButton({ children, color }) {
  return (
    <StyledButton color={color} variant="contained">
      {children}
    </StyledButton>
  );
}
