import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  TextContainer,
  Stack,
  Text,
  Button,
  ButtonGroup,
} from "@shopify/polaris";
import ReactStars from "react-rating-stars-component";

import classes from "./Page.module.scss";

export function Page({ pageContent }) {
  return (
    <>
      {pageContent &&
        pageContent.length &&
        pageContent.map((partial) => {
          return <section>{partial.title}</section>;
        })}
    </>
  );
}
