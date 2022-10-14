import { forwardRef } from "react";

import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";

import styles from "./CustomSelect.module.scss";
import cssVariables from "../../assets/css/_variables.module.scss";
import { Menu } from "../menu";
import { MenuHorizontalDotSvg } from "../../assets/svg";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: ${cssVariables.fontFamily};
  min-width: 120px;
  cursor: pointer;
  line-height: 18px;
  box-sizing: border-box;
  white-space: nowrap;
  display: flex;
  align-items: center;

  text-align: left;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};

  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url("/svg/selectListBtn.svg");
      margin-left: 1.5rem;
    }
  }

  &::after {
    content: url("/svg/selectListBtn.svg");
    float: right;
    margin-left: 1.5rem;
  }
  `
);

const StyledListbox = styled("ul")(({ theme }) => ({
  marginTop: "4px",
  background: "#FFFFFF",
  border: "1px solid #BABFC3",
  boxShadow: "0px 30px 45px rgba(0, 0, 0, 0.12)",
  borderRadius: "8px",
  padding: "16px",
}));

export const StyledOption = styled((props) => {
  return <li {...props} />;
})(({ theme }) => ({
  listStyle: "none",
  padding: "8px",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  whiteSpace: "nowrap",

  "&:last-of-type": {
    borderBottom: "none",
  },

  [`&.${optionUnstyledClasses.selected}`]: {
    backgroundColor: `${theme.palette.mode === "dark" ? blue[900] : "white"}`,
    color: `${theme.palette.mode === "dark" ? blue[100] : "unset"}`,
  },

  [`&.${optionUnstyledClasses.highlighted}`]: {
    backgroundColor: `${theme.palette.mode === "dark" ? grey[800] : grey[100]}`,
    color: `${theme.palette.mode === "dark" ? grey[300] : grey[900]}`,
    cursor: "pointer",
  },

  [`&.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected}`]:
    {
      backgroundColor: `${theme.palette.mode === "dark" ? blue[900] : "white"}`,
      color: `${theme.palette.mode === "dark" ? blue[100] : "unset"}`,
    },

  [`&.${optionUnstyledClasses.disabled}`]: {
    color: `${theme.palette.mode === "dark" ? grey[700] : grey[400]}`,
  },

  [`&:hover:not(.${optionUnstyledClasses.disabled})`]: {
    backgroundColor: `${theme.palette.mode === "dark" ? grey[800] : grey[100]}`,
    color: `${theme.palette.mode === "dark" ? grey[300] : "unset"}`,
  },
}));

const StyledPopper = styled(PopperUnstyled)`
  z-index: 2;
  display: flex;
  justify-content: center;
  cursor: ';
`;

export const Upsell = forwardRef(function CustomSelect(props, ref) {
  const components = {
    // Root: StyledButton,
    Root: Menu.HorizontalDrop,
    // Root: "div",
    // Root: MenuHorizontalDotSvg,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return (
    <SelectUnstyled ref={ref} components={components} {...props}>
      {props?.options?.map((option, idx) => (
        <StyledOption className={option.className} key={idx}>
          {option.label}
        </StyledOption>
      ))}
    </SelectUnstyled>
  );
});
