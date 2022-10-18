import { forwardRef, ForwardRefRenderFunction } from "react";

import { styled } from "@mui/system";
import { default as MuiButton, ButtonProps } from "@mui/material/Button";

import variables from "@/assets/css/_variables.module.scss";

export type ButtonRef =
  | ((instance: HTMLButtonElement | null) => void)
  | React.RefObject<HTMLButtonElement>
  | null
  | undefined;

export type ButtonBaseProps = ButtonProps & {
  children?: React.ReactNode | string;
  small?: boolean;
  sx?: Record<any, any>;
  customRef?: ButtonRef;
};

export const ButtonBase = styled(
  ({ small, customRef, sx, ...props }: ButtonBaseProps) => (
    <MuiButton
      ref={customRef}
      variant="contained"
      {...props}
      sx={{
        ...sx,
        height: small ? "36px" : "44px",
        fontSize: small ? "14px" : "16px",
        padding: small ? "0 22px" : "12px 24px",
      }}
    />
  )
)({
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
