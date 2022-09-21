import { forwardRef } from "react";

import classes from "./.module.scss";
import dragDrop from "../../data/dragDrop";

export const Blank = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={classes.blankElement + " " + dragDrop.BLANK_COMPONENT_NAME}
    ></div>
  );
});
