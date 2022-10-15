import classes from "@/assets/css/_classes.module.scss";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Props = {
  children?: JSX.Element;
  className?: string;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const HiddenWrapper = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, fullWidth, ...args }: Props, ref) => {
    return (
      <button
        ref={ref}
        {...args}
        className={
          classes.btnClean +
          (className ? ` ${className}` : "") +
          (fullWidth ? ` ${classes.w100}` : "")
        }
      >
        {children}
      </button>
    );
  }
);
