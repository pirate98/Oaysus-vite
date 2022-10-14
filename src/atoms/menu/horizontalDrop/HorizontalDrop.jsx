import { MenuHorizontalDotSvg } from "@/assets/svg";
import { Button } from "@/atoms/button";
import { forwardRef } from "react";
import classes from "./HorizontalDrop.module.scss";

export const HorizontalDrop = forwardRef(
  // remove props passed from mui
  ({ className = "", ownerState, options, ...args }, ref) => {
    return (
      <Button.HiddenWrapper ref={ref} {...args}>
        <div className={classes.container + " " + className}>
          <MenuHorizontalDotSvg />
        </div>
      </Button.HiddenWrapper>
    );
  }
);