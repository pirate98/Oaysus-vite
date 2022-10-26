import { forwardRef } from "react";

import { MenuHorizontalDotSvg } from "@/assets/svg";
import { Button } from "@/atoms/button";
import classes from "./HorizontalDrop.module.scss";

type Props = {
  className?: string;
  ownerState?: boolean; // to remove mui error
} & typeof Button;

export const HorizontalDrop = forwardRef(
  // remove props passed from mui
  (
    { className = "", ownerState, ...args }: Props,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <Button.HiddenWrapper ref={ref} {...args}>
        <div className={classes.container + " " + className}>
          <MenuHorizontalDotSvg />
        </div>
      </Button.HiddenWrapper>
    );
  }
);
