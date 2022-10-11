import { styled } from "@mui/system";
import { Button } from "./Button";

import variables from "@/assets/css/_variables.module.scss";

export const BuilderMenu = styled((props) => <Button {...props} />)({
  height: "auto",
  minHeight: "36px",
  fontSize: "12px",
  padding: "unset",
  "&:hover": {
    background: variables.secondaryHover,
  },
});
