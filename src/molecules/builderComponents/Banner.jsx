import { forwardRef } from "react";

import classes from "./.module.scss";
import { filterOnlyStyleValues } from "../helpers/builder";

const fn = forwardRef(({ content, className }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <div
      ref={ref}
      className={classes.imageZone + (className ? ` ${className}` : "")}
      style={{
        backgroundImage:
          content?.backgroundPreview || 'url("/image/empty-image-dark.svg")',
        backgroundSize: false ? "cover" : "unset",
        ...styles.sizing,
      }}
    ></div>
  );
});

const json = {
  sizing: { height: "240px" },
  backgroundPreview: null,
  background: {
    backgroundColor: "#008060",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Banner = fn;
