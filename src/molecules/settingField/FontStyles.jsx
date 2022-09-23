import { ButtonGroupTemplate } from "./ButtonGroupTemplate";
import {
  fontStyleBold,
  fontStyleItalic,
  fontStyleUnderline,
} from "../../assets/svg";
import { removePx } from "../helpers/builder";
import { useGetActiveComponent } from "../../hooks";
import { useDispatch } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

const BOLD_THRESHOLD = 400;
const BOLD = 600;

export function FontStyles({ module }) {
  const dispatch = useDispatch();

  const activeComponent = useGetActiveComponent();

  const buttons = [
    {
      title: <img src={fontStyleBold} />,
      selected: removePx(activeComponent[module].fontWeight) > BOLD_THRESHOLD,
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "fontWeight",
            value:
              removePx(activeComponent[module].fontWeight) > BOLD_THRESHOLD
                ? BOLD_THRESHOLD
                : BOLD,
          })
        ),
    },
    {
      title: <img src={fontStyleItalic} />,
      selected: activeComponent[module].fontStyle === "italic",
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "fontStyle",
            value:
              activeComponent[module].fontStyle === "italic"
                ? "normal"
                : "italic",
          })
        ),
    },
    {
      title: <img src={fontStyleUnderline} />,
      selected: activeComponent[module].textDecoration === "underline",
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "textDecoration",
            value:
              activeComponent[module].textDecoration === "underline"
                ? "none"
                : "underline",
          })
        ),
    },
  ];

  return <ButtonGroupTemplate title={"Styling"} buttons={buttons} />;
}
