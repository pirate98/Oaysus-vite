import { forwardRef } from "react";

import classes from "./.module.scss";
import componentsData from "@/data/componentsData";
import { ReactComponent as CirclePlus } from "@/assets/svg/circlePlus.svg";

export const Blank = forwardRef((props, ref) => {
  return (
    <div
      // this classname is used to return from drop zone hover method
      {...props}
      className={classes.dropZone + " " + componentsData.BLANK_COMPONENT_NAME}
      ref={ref}
    >
      <div className={classes.blankElement}>
        <span className={classes.midLine}></span>
        <CirclePlus className={classes.circlePlus} />
      </div>
    </div>
  );
});
