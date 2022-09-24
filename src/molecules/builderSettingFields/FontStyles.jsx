import { ButtonGroupTemplate } from "./ButtonGroupTemplate";
import {
  fontStyleBold,
  fontStyleItalic,
  fontStyleUnderline,
} from "../../assets/svg";
import { removePx } from "../helpers/builder";
import { useGetSelectedPageComponent } from "../../hooks";
import { useDispatch } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";

const BOLD_THRESHOLD = 400;
const BOLD = 600;

export function FontStyles({ module }) {
  const dispatch = useDispatch();

  const selectedPageComponentName = useGetSelectedPageComponent();

  const { fontWeight, fontStyle, textDecoration } =
    (selectedPageComponentName && selectedPageComponentName[module]) || {};

  const buttons = [
    {
      title: <img src={fontStyleBold} />,
      selected: removePx(fontWeight) > BOLD_THRESHOLD,
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "fontWeight",
            value:
              removePx(fontWeight) > BOLD_THRESHOLD ? BOLD_THRESHOLD : BOLD,
          })
        ),
    },
    {
      title: <img src={fontStyleItalic} />,
      selected: fontStyle === "italic",
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "fontStyle",
            value: fontStyle === "italic" ? "normal" : "italic",
          })
        ),
    },
    {
      title: <img src={fontStyleUnderline} />,
      selected: textDecoration === "underline",
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "textDecoration",
            value: textDecoration === "underline" ? "none" : "underline",
          })
        ),
    },
  ];

  return <ButtonGroupTemplate title={"Styling"} buttons={buttons} />;
}
