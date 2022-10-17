import { styled } from "@mui/system";

import { Secondary } from "./Secondary";
import variables from "@/assets/css/_variables.module.scss";

export const Trigger = styled(({ children, ...rest }) => (
  <Secondary variant="contained" {...rest}>
    {children}
  </Secondary>
))({
  color: variables.shopifyGreen,
  border: `1px solid #BABFC3`,
});
