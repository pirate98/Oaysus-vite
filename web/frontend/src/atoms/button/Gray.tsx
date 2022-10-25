import { styled } from "@mui/system";

import { Secondary } from "./Secondary";
import { ButtonBaseProps } from "./buttonBase/ButtonBase";

type Props = {
  children: React.ReactNode | string;
} & ButtonBaseProps;

export const Gray = styled(({ children, ...rest }: Props) => (
  <Secondary {...rest}>{children}</Secondary>
))({
  color: "#BABFC3",
  border: `1px solid #BABFC3`,
});
