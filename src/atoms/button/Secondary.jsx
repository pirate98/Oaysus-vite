import { styled } from "@mui/system";

import { Button } from "./Button";
import variables from "@/assets/css/_variables.module.scss";

export const Secondary = styled(({ children, ...rest }) => (
  <Button variant="contained" {...rest}>
    {children}
  </Button>
))({
  backgroundColor: "#ffffff !important",
  color: "#000000",
  border: `1px solid ${variables.secondaryBorder}`,
  "&:hover": {
    backgroundColor: `${variables.whiteHover} !important`,
  },
});

// {
//   backgroundColor: "#ffffff !important",
//   color: "#000000",
//   border: "1px solid",
//   borderColor: variables.secondaryBorder,

//   "&:hover": {
//     borderColor: variables.secondaryBorder,
//   },
// }
