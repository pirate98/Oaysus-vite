import { styled } from "@mui/system";
import { default as MuiButtonGroup } from "@mui/material/ButtonGroup";

import { Button } from "@/atoms/button";
import {
  inputWidth,
  secondaryHover,
} from "@/assets/css/_variables.module.scss";

export const ButtonGroup = styled((props) => (
  <MuiButtonGroup {...props} variant="outlined">
    {props.buttons.map((button, idx) => (
      <Button.BuilderMenu
        name={button.name}
        value={button.value}
        onClick={button.onClick}
        color="success"
        key={idx}
        sx={{
          flexGrow: 1,
          background: button.selected ? secondaryHover : "white",
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
      </Button.BuilderMenu>
    ))}
  </MuiButtonGroup>
))({
  width: inputWidth,
  border: "none",
  boxShadow: "none",
});
