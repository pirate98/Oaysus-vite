import { styled } from "@mui/system";

import { PlainButton } from "./PlainButton";
import variables from "../../assets/css/_variables.module.scss";

const styles = {
  whiteButton: {
    backgroundColor: "#ffffff !important",
    color: "#000000",
    border: `1px solid ${variables.secondaryBorder}`,
  },
};

export const BuilderButton = styled(({ color, children, ...rest }) => (
  <PlainButton
    variant="contained"
    sx={{
      "&":
        color === "white"
          ? { ...styles.whiteButton, "&:hover": { ...styles.whiteButton } }
          : {},
    }}
    {...rest}
  >
    {children}
  </PlainButton>
))({
  height: "44px",
  fontFamily: variables.fontFamily,
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  backgroundColor: variables.shopifyGreen,
  color: "white",
  width: "100%",
  "&:hover": {
    backgroundColor: variables.primaryHover,
    // borderColor: "black",
  },
});
