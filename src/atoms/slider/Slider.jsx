import { default as MuiSlider } from "@mui/material/Slider";
import { styled } from "@mui/system";

export const Slider = styled(MuiSlider)({
  width: "121px",
  color: "green",
  ".MuiSlider-thumb": {
    width: "16px",
    height: "16px",
    background: "green",
    border: "4px solid white",
    outline: "0.5px solid #BABFC3",
    filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25))",
    "&.Mui-active": {
      // boxShadow: "0 0 0 10px",
    },
  },
});
