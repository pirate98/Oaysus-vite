import { styled } from "@mui/system";

import { Secondary } from "./Secondary";

export const Gray = styled(({ children, ...rest }) => (
  <Secondary variant="contained" {...rest}>
    {children}
  </Secondary>
))({
  color: "#BABFC3",
  border: `1px solid #BABFC3`,
});
