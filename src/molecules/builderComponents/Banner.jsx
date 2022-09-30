import { forwardRef } from "react";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

const fn = forwardRef(({ content, className }, ref) => {
  const sizingStyle = styleFilter(content.sizing);

  return (
    <div
      ref={ref}
      className={classes.imageZone + (className ? ` ${className}` : "")}
      style={{
        backgroundImage: false ? false : 'url("/image/empty-image-dark.svg")',
        backgroundSize: false ? "cover" : "unset",
        ...sizingStyle,
      }}
    ></div>
  );
});

const json = {
  sizing: { height: "240px" },
  background: {
    backgroundColor: "#008060",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Banner = fn;
