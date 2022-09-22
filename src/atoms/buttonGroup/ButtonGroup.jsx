import { styled } from "@mui/system";
import { PlainButton } from "../button/PlainButton";
import { default as MuiButtonGroup } from "@mui/material/ButtonGroup";

import {
  inputWidth,
  inputPadding,
  inputFontSize,
  inputBorderFocused,
  shopifyGreen,
} from "../../assets/css/_variables.module.scss";

export const ButtonGroup = styled((props) => (
  <MuiButtonGroup {...props} variant="outlined">
    {props.buttons.map((button, idx) => (
      <PlainButton
        name={props.name}
        value={button.value}
        color="success"
        key={idx}
        sx={{
          flexGrow: 1,
          background: button.value === props.selected ? "#BABFC3" : "white",
          color: "black",
          borderColor: "#BABFC3",
          "&:hover": {
            borderRightColor:
              idx === props.buttons.length - 1 ? "inherit" : "white !important",
            borderColor: "#BABFC3",
          },
        }}
      >
        {button.title}
      </PlainButton>
    ))}
  </MuiButtonGroup>
))({
  width: inputWidth,
  border: "none",
  boxShadow: "none",
});
