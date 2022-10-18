import { styled } from "@mui/system";

import { ButtonBase, ButtonBaseProps } from "./buttonBase/ButtonBase";
import variables from "@/assets/css/_variables.module.scss";
import { forwardRef } from "react";

type Props = {
  children?: string | React.ReactNode;
} & ButtonBaseProps;

export const Secondary = styled(({ children, ...rest }: Props) => (
  <ButtonBase {...rest}>{children}</ButtonBase>
))({
  backgroundColor: "#ffffff !important",
  color: "#000000",
  border: `1px solid ${variables.secondaryBorder}`,
  "&:hover": {
    backgroundColor: `${variables.secondaryHover} !important`,
  },
});
