import { styled } from "@mui/system";

import { Button } from "./Button";
import variables from "@/assets/css/_variables.module.scss";

export const Primary = styled(({ children, ...rest }) => (
  <Button variant="contained" {...rest}>
    {children}
  </Button>
))({
  backgroundColor: variables.shopifyGreen,
  color: "white",
  width: "100%",
  "&:hover": {
    backgroundColor: variables.primaryHover,
  },
});
