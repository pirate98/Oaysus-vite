import { Box } from "@mui/material";
import { Button } from "@/atoms/button";

import classes from "./.module.scss";

export function NoRevenue() {
  return (
    <Box
      sx={{
        "& > *": {
          textAlign: "center",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <h3 className={classes.h3}>There is no data to report yet.</h3>
      <p className={classes.h4 + " " + classes.textGray}>
        Create a funnel to help increase your sales.
      </p>
      <Button.Primary sx={{ marginTop: "19px" }}>
        Create a Funnel
      </Button.Primary>
    </Box>
  );
}
