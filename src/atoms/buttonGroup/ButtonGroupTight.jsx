import { Fragment } from "react";

import { styled } from "@mui/system";

import { Button } from "../button";
import { default as MuiButtonGroup } from "@mui/material/ButtonGroup";
import variables from "../../assets/css/_variables.module.scss";

export const ButtonGroupTight = styled((props) => (
  <MuiButtonGroup {...props} buttons="" variant="outlined">
    {props.buttons.map((button, idx) => (
      <Fragment key={idx}>
        <Button.BuilderMenu
          name={button.name}
          value={button.value}
          onMouseDown={(e) => {
            button.onClick(e);
          }}
          onMouseUp={button.onMouseUp}
          color="success"
          key={"button" + idx}
          sx={{
            padding: "14px 7px",
            background: button.selected ? variables.primaryActive : "white",
            border: "none",
            "&:hover": {
              border: "none",
            },
            img: {
              height: "12px",
            },
          }}
        >
          {button.title}
        </Button.BuilderMenu>
        {props.divider && props.divider - 1 === idx && (
          <span
            style={{ width: "1.6px", background: "#BABFC3" }}
            key={"divider" + idx}
          ></span>
        )}
      </Fragment>
    ))}
  </MuiButtonGroup>
))({
  border: "none",
  outline: "1px solid #BABFC3",
  boxShadow: "none",
  borderRadius: "4px",
  "&.MuiButtonGroup-root .MuiButtonGroup-grouped": {},
});
