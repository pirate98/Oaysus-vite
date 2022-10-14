import { styled } from "@mui/system";

import { ButtonBase } from "./ButtonBase";
import variables from "@/assets/css/_variables.module.scss";

export const Secondary = styled(({ children, ...rest }) => (
  <ButtonBase variant="contained" {...rest}>
    {children}
  </ButtonBase>
))({
  backgroundColor: "#ffffff !important",
  color: "#000000",
  border: `1px solid ${variables.secondaryBorder}`,
  "&:hover": {
    backgroundColor: `${variables.whiteHover} !important`,
  },
});
