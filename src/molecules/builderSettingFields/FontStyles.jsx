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
import { ButtonGroupTight } from "../../atoms";

const BOLD_THRESHOLD = 400;
const BOLD = 600;

export function FontStyles({ module, ...args }) {
  const dispatch = useDispatch();

  const selectedPageComponent = useGetSelectedPageComponent();

  const { fontWeight, fontStyle, textDecoration } =
    (selectedPageComponent && selectedPageComponent[module]) || {};

  const buttons = [
    {
      title: <img src={fontStyleBold} />,
      selected: removePx(fontWeight) > BOLD_THRESHOLD,
      onClick: () => {
        console.log("click");
        dispatch(
          updatePageComponents({
            module,
            key: "fontWeight",
            value:
              removePx(fontWeight) > BOLD_THRESHOLD ? BOLD_THRESHOLD : BOLD,
          })
        );
      },
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

  return (
    <section className={args.className}>
      <ButtonGroupTight buttons={buttons} />
    </section>
  );
}
