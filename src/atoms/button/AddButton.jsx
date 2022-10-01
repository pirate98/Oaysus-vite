import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const AddButton = styled((props) => (
  <Button variant="contained" {...props} />
))({
  height: "auto",
  minHeight: "36px",
  whiteSpace: "nowrap",
  textTransform: "none",
  boxShadow: "none",
  background: "#008060",
  borderRadius: "6px",
  color: "white",
  "&:hover": {
    background: "rgba(0, 110, 82, 1)",
  },
  "&::before": {
    content: "url(/svg/add.svg)",
    marginRight: "0.5rem",
    height: "19px",
  },
});

// export function AddButton({ children, color }) {
//   return (
//     <StyledButton color={color} variant="contained">
//       {children}
//     </StyledButton>
//   );
// }
