import { default as MuiSwitch } from "@mui/material/Switch";
import { styled } from "@mui/system";

import {
  disabledColor,
  shopifyGreen,
} from "../../assets/css/_variables.module.scss";

export const Switch2 = styled(MuiSwitch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: shopifyGreen,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {},
    "&.Mui-disabled + .MuiSwitch-track": {},
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 20.5,
    height: 20.5,
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    width: "40px",
    height: "24px",
    borderRadius: 26 / 2,
    backgroundColor: disabledColor,
    opacity: 1,
  },
}));
