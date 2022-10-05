import { forwardRef } from "react";

import classes from "./.module.scss";
import { filterOnlyStyleValues } from "../helpers/builder";

const fn = forwardRef(({ content, className }, ref) => {
  const styles = filterOnlyStyleValues(content);

  return (
    <div
      ref={ref}
      className={classes.w100 + (className ? ` ${className}` : "")}
      style={{
        ...styles.sizing,
        ...styles.background,
        backgroundImage:
          content?.backgroundPreview || 'url("/image/empty-image-dark.svg")',
      }}
    ></div>
  );
});

const json = {
  sizing: { height: "240px" },
  backgroundPreview: null,
  background: {
    backgroundColor: "rgba(224, 224, 224, 1)",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Banner = fn;
