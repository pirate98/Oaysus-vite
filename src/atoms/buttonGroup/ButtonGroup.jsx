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
        color="success"
        key={idx}
        sx={{
          color: "black",
          borderColor: " #BABFC3",
          "&:hover": {
            borderRightColor: "green !important",
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
});
