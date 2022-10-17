import { MenuHorizontalDotSvg } from "@/assets/svg";
import { Button } from "@/atoms/button";
import { forwardRef } from "react";
import classes from "./HorizontalDrop.module.scss";

type Props = {
  className?: string;
} & typeof Button;

export const HorizontalDrop = forwardRef(
  // remove props passed from mui
  (
    { className = "", ...args }: Props,
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
