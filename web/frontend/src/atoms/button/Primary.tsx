import { styled } from "@mui/system";
import { ButtonProps } from "@mui/material/Button";

import { ButtonBase, ButtonBaseProps } from "./buttonBase/ButtonBase";
import variables from "@/assets/css/_variables.module.scss";

type Props = {
  children: string | React.ReactNode;
} & ButtonBaseProps;

export const Primary = styled(({ children, ...rest }: Props) => (
  <ButtonBase {...rest}>{children}</ButtonBase>
))({
  backgroundColor: variables.primaryColor,
  color: "white",
  // width: "100%",
  "&:hover": {
    backgroundColor: variables.primaryHover,
  },
});
