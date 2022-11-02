import { styled } from "@mui/system";

import { Secondary } from "./Secondary";
import { ButtonBaseProps } from "./buttonBase/ButtonBase";
import variables from "@/assets/css/_variables.module.scss";

type Props = {
  children: string | React.ReactNode;
} & ButtonBaseProps;

export const Trigger = styled(({ children, ...rest }: Props) => (
  <Secondary {...rest}>{children}</Secondary>
))({
  color: variables.shopifyGreen,
  border: `1px solid #BABFC3`,
});
