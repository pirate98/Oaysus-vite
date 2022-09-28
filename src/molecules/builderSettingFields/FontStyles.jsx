import {
  fontStyleBold,
  fontStyleItalic,
  fontStyleUnderline,
  alignCenter,
  alignLeft,
  alignRight,
} from "../../assets/svg";
import { removePx } from "../helpers/builder";
import { useGetSelectedPageComponent } from "../../hooks";
import { useDispatch } from "react-redux";
import { updatePageComponents } from "../../pages/builder/builderSlice";
import { ButtonGroupTight } from "../../atoms";

const BOLD_THRESHOLD = 400;
const BOLD = 600;

export function FontStyles({ module, elementToFocus, ...args }) {
  const dispatch = useDispatch();

  const selectedPageComponent = useGetSelectedPageComponent();

  const { fontWeight, fontStyle, textDecoration, textAlign } =
    (selectedPageComponent && selectedPageComponent[module]) || {};

  const handleAlign = (value) => {
    dispatch(
      updatePageComponents({
        module,
        key: "textAlign",
        value,
      })
    );
  };

  const handleMouseUp = () => {
    // console.log(elementToFocus.current);
    elementToFocus?.current?.focus();
  };

  const buttons = [
    {
      title: <img src={fontStyleBold} />,
      selected: removePx(fontWeight) > BOLD_THRESHOLD,
      onMouseUp: handleMouseUp,
      onClick: ({ target }) => {
        console.log(target);
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
      onMouseUp: handleMouseUp,
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
      onMouseUp: handleMouseUp,
      onClick: () =>
        dispatch(
          updatePageComponents({
            module,
            key: "textDecoration",
            value: textDecoration === "underline" ? "none" : "underline",
          })
        ),
    },
    {
      title: <img src={alignLeft} />,
      selected: textAlign === "left",
      onMouseUp: handleMouseUp,
      onClick: () => handleAlign("left"),
    },
    {
      title: <img src={alignCenter} />,
      selected: textAlign === "center",
      onMouseUp: handleMouseUp,
      onClick: () => handleAlign("center"),
    },
    {
      title: <img src={alignRight} />,
      selected: textAlign === "right",
      onMouseUp: handleMouseUp,
      onClick: () => handleAlign("right"),
      onMouseUp: handleMouseUp,
    },
  ];

  // const alignmentButtons = [];

  return (
    <section className={args.className}>
      <ButtonGroupTight buttons={buttons} divider={3} />
    </section>
  );
}
