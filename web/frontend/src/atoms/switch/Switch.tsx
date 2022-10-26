import { default as MuiSwitch } from "@mui/material/Switch";
import { styled } from "@mui/system";

export const Switch = styled(MuiSwitch)({
  ".MuiButtonBase-root": {
    overflow: "visible",
    padding: "5px",
  },
  ".MuiSwitch-switchBase.Mui-checked": {
    color: "white",
  },
  ".MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#008060",
    opacity: 1,
  },
  ".MuiSwitch-thumb": {
    boxShadow: "-1px 1px 4px rgba(0, 0, 0, 0.33)",
    width: "22px",
    height: "22px",
  },
  ".MuiSwitch-track": {
    height: "8px",
    width: "26px",
    borderRadius: "24px",
  },
});
