import { styled } from "@mui/system";

import { PlainButton } from "./PlainButton";
import variables from "../../assets/css/_variables.module.scss";

const styles = {
  whiteButton: {
    backgroundColor: "white !important",
    color: "#000000",
    border: "1px solid",
    borderColor: "rgba(201, 204, 207, 1)",
  },
};

export const BuilderButton = styled((props) => {
  const { color, children } = props;

  const mutableProps = { ...props };
  delete mutableProps.color;

  return (
    <PlainButton
      variant="contained"
      sx={{
        "&":
          color === "white"
            ? { ...styles.whiteButton, "&:hover": { ...styles.whiteButton } }
            : {},
      }}
      {...mutableProps}
    >
      {children}
    </PlainButton>
  );
})({
  fontFamily: variables.fontFamily,
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  backgroundColor: variables.shopifyGreen,
  color: "white",
  width: "100%",
  "&:hover": {
    backgroundColor: variables.shopifyGreen,
    borderColor: "black",
  },
});
