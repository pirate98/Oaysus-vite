import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export const Banner = forwardRef(({ content }, ref) => {
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
