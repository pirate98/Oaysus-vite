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

const mockData = {
  incentive1: {
    title: {
      fontFamily:
        '"SF Pro Display", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      lineHeight: "20px",
      fontSize: "24px",
      fontColor: "white",
      padding: "0 0 18px 0",
      margin: 0,
      visibility: true,
    },
    subTitle: {
      fontFamily:
        '"SF Pro Display", -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      lineHeight: "20px",
      fontSize: "18px",
      fontColor: "white",
      padding: "0 0 18px 0",
      margin: 0,
      visibility: true,
    },
    countdown: {
      duration: "5",
      visbility: true,
    },
    background: { color: "rgb(0, 128, 96)" },
    layout: {
      padding: "22px 10px 2px 10px",
    },
  },
};
