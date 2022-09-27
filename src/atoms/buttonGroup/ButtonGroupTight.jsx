import { Fragment } from "react";

import { styled } from "@mui/system";

import { PlainButton } from "../button/PlainButton";
import { default as MuiButtonGroup } from "@mui/material/ButtonGroup";
import variables from "../../assets/css/_variables.module.scss";

export const ButtonGroupTight = styled((props) => (
  <MuiButtonGroup {...props} buttons="" variant="outlined">
    {props.buttons.map((button, idx) => (
      <Fragment key={idx}>
        <PlainButton
          name={button.name}
          value={button.value}
          // onClickCapture={button.onClick}
          onMouseDown={button.onClick}
          color="success"
          key={"button" + idx}
          sx={{
            padding: "14px 7px",
            // flexGrow: 1,
            background: button.selected ? variables.primaryActive : "white",
            color: "black",
            // borderColor: "#BABFC3",
            border: "none",
            "&:hover": {
              border: "none",
              // borderRightColor:
              //   idx === props.buttons.length - 1 ? "inherit" : "white !important",
              // borderColor: "#BABFC3",
            },
            img: {
              // width: "10px",
              height: "12px",
            },
          }}
        >
          {button.title}
        </PlainButton>
        {props.divider && props.divider - 1 === idx && (
          <span
            style={{ width: "1.5px", background: "#BABFC3" }}
            key={"divider" + idx}
          ></span>
        )}
      </Fragment>
    ))}
  </MuiButtonGroup>
))({
  // width: "90px",
  border: "none",
  outline: "1px solid #BABFC3",
  // border: "1px solid #BABFC3",
  boxShadow: "none",
  borderRadius: "4px",
  "&.MuiButtonGroup-root .MuiButtonGroup-grouped": {
    // width: "30px",
    // minWidth: "30px",
    // padding: "14px 7px",
  },
});
