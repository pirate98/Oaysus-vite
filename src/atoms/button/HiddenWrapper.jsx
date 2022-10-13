import classes from "@/assets/css/_classes.module.scss";
import { forwardRef } from "react";

export const HiddenWrapper = forwardRef(
  ({ children, className = "", fullWidth = false, ...args }, ref) => {
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
