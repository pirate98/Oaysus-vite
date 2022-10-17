import { styled } from "@mui/system";

import { ButtonBase } from "./buttonBase/ButtonBase";
import variables from "@/assets/css/_variables.module.scss";

type Props = {
  children: string;
} & typeof ButtonBase;

export const Primary = styled(({ children, ...rest }: Props) => (
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
