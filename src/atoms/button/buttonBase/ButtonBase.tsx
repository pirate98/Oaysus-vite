import { styled } from "@mui/system";
import { default as MuiButton, ButtonProps } from "@mui/material/Button";

import variables from "@/assets/css/_variables.module.scss";

export type ButtonBaseProps = ButtonProps & {
  children: React.ReactNode;
  small?: boolean;
  sx?: Record<any, any>;
};

export const ButtonBase = styled(({ small, sx, ...props }: ButtonBaseProps) => (
  <MuiButton
    {...props}
    sx={{
      ...sx,
      height: small ? "36px" : "44px",
      fontSize: small ? "14px" : "16px",
      padding: small ? "0 22px" : "12px 24px",
    }}
  />
))({
  fontFamily: variables.fontFamily,
  minWidth: "unset",
  boxShadow: "none",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0px",
  textAlign: "center",
  textTransform: "none",
  display: "flex",
  gap: "11px",
  whiteSpace: "nowrap",

  "&:hover": {
    boxShadow: "none",
  },
});
