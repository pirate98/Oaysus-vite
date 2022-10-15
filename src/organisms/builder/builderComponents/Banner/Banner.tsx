import { forwardRef } from "react";

import classes from "../.module.scss";
// import { filterOnlyStyleValues } from "@/helpers/builder";
import { componentsData } from "@/data/componentsData";
import { BuilderComponentProps } from "../types/builderComponent.type";
import { filterOnlyStyleValues } from "@/helpers";

const fn = forwardRef<HTMLInputElement>(
  ({ content, className }: BuilderComponentProps, ref) => {
    const styles = filterOnlyStyleValues(content);

    return (
      <div
        ref={ref}
        className={classes.w100 + (className ? ` ${className}` : "")}
        style={{
          ...styles?.sizing,
          ...styles?.layout,
          backgroundImage:
            content?.backgroundPreview ||
            `url(${componentsData.PLACEHOLDER_IMAGE_URL})`,
        }}
      ></div>
    );
  }
);

const json = {
  sizing: { height: "240px" },
  backgroundPreview: null,
  layout: {
    backgroundColor: "#e0e0e0",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Banner = fn;
