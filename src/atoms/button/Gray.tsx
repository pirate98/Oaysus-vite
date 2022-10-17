import { styled } from "@mui/system";

import { Secondary } from "./Secondary";

type Props = {
  children: React.ReactNode;
} & typeof Secondary;

export const Gray = styled(({ children, ...rest }: Props) => (
  <Secondary {...rest}>{children}</Secondary>
))({
  color: "#BABFC3",
  border: `1px solid #BABFC3`,
});
