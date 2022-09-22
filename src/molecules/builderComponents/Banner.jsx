import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

const fn = forwardRef(({ content }, ref) => {
  return (
    <div
      ref={ref}
      className={classes.imageZone}
      style={{
        backgroundImage: false ? false : 'url("/image/empty-image-dark.svg")',
        backgroundSize: false ? "cover" : "unset",
      }}
    ></div>
  );
});

const json = {
  sizing: {},
  background: {
    backgroundColor: "rgb(0, 128, 96)",
    backgroundImage: "url(/mockData/flowers.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Banner = fn;
