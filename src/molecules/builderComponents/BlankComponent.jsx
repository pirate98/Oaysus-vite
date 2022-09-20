import { forwardRef } from "react";

import classes from "./.module.scss";

export const BlankComponent = forwardRef((props, ref) => {
  return <div ref={ref} {...props} className={classes.blankElement}></div>;
});
