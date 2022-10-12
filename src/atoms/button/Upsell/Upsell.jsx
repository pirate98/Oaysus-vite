import Box from "@mui/material/Box";

import { AddPlus } from "@/assets/svg";
import classes from "./Upsell.module.scss";
import { HiddenWrapper } from "../HiddenWrapper";
import { CONSTANT } from "@/data/constants";

export function Upsell({ children, ...args }) {
  return (
    <div {...args} className={classes.upsellBtnContainer}>
      <HiddenWrapper className={classes.link}>
        <Box
          sx={{
            height: "30px",
            width: "30px",
            margin: "auto",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "4px",
            backgroundColor: CONSTANT.COLOR_MAIN,
          }}
        >
          <AddPlus />
        </Box>
        <p className={classes.text}>{children}</p>
      </HiddenWrapper>
    </div>
  );
}
