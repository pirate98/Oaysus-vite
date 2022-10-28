import { styled } from "@mui/system";
import { ButtonBase } from "./buttonBase/ButtonBase";

import variables from "@/assets/css/_variables.module.scss";

export const BuilderMenu = styled(ButtonBase)({
  height: "auto",
  minHeight: "36px",
  fontSize: "12px",
  padding: "unset",
  "&:hover": {
    background: variables.secondaryHover,
  },
});
