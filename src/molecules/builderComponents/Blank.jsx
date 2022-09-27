import { forwardRef } from "react";

import classes from "./.module.scss";
import dragDrop from "../../data/dragDrop";
import { ReactComponent as CirclePlus } from "../../assets/svg/circlePlus.svg";

export const Blank = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={classes.blankElement + " " + dragDrop.BLANK_COMPONENT_NAME}
    >
      <span className={classes.midLine}></span>
      <CirclePlus className={classes.circlePlus} />
    </div>
  );
});
