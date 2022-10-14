import { styled } from "@mui/system";

import { ButtonBase } from "./ButtonBase";
import variables from "@/assets/css/_variables.module.scss";

export const Primary = styled(({ children, ...rest }) => (
  <ButtonBase variant="contained" {...rest}>
    {children}
  </ButtonBase>
))({
  backgroundColor: variables.shopifyGreen,
  color: "white",
  // width: "100%",
  "&:hover": {
    backgroundColor: variables.primaryHover,
  },
});
