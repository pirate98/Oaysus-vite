import * as React from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled, Theme } from "@mui/system";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";

import { CONSTANT } from "@/data/constants";

const StyledPopperDiv = styled("div")(
  ({ theme }: { theme: Theme }) => `
  padding: 0.5rem;
  border: 1px solid lightgray;
  background-color: ${theme.palette.mode === "dark" ? "#121212" : "#fff"};
  opacity: 1;
  margin: 0.25rem;
  border-radius: ${CONSTANT.BORDER_RADIUS};
`
);

export function Unstyled({ children, button }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const Button = button;

  const handleClickAway = () => setAnchorEl(null);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <section aria-describedby={id} onClick={handleClick}>
          <Button type="button">Toggle Popper</Button>
        </section>
        <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
          <StyledPopperDiv>{children}</StyledPopperDiv>
          {/* <Box sx={{ ...styles.contentDiv }}>{children}</Box> */}
        </PopperUnstyled>
      </div>
    </ClickAwayListener>
  );
}

const styles = {
  contentDiv: {
    margin: "0.25rem",
    padding: "0.5rem",
  },
};
