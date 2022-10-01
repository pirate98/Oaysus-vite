import { styled } from "@mui/system";

import { PlainButton } from "./PlainButton";
import variables from "../../assets/css/_variables.module.scss";

const styles = {
  whiteButton: {
    backgroundColor: "#ffffff !important",
    color: "#000000",
    border: "1px solid",
    borderColor: "rgba(201, 204, 207, 1)",
  },
};

export const BuilderSecondaryButton = styled((props) => {
  const { color, children } = props;

  const mutableProps = { ...props };
  delete mutableProps.color;

  return (
    <PlainButton
      variant="contained"
      sx={{
        backgroundColor: "#ffffff !important",
        color: "#000000",
        border: "1px solid",
        borderColor: variables.secondaryBorder,

        "&:hover": {
          borderColor: variables.secondaryBorder,
        },
      }}
      {...mutableProps}
    >
      {children}
    </PlainButton>
  );
})({});
