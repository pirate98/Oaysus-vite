import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection } from "lexical";
import { FORMAT_TEXT_COMMAND } from "lexical";

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
  const [editor] = useLexicalComposerContext();

  const dispatch = useDispatch();

  const selectedPageComponent = useGetSelectedPageComponent();

  const { fontWeight, textAlign } =
    (selectedPageComponent && selectedPageComponent[module]) || {};

  const handleStyleChange = (command) => {
    // const editorState = editor.getEditorState();
    // console.log({ editorState });
    // editorState.read(() => {
    //   const selection = $getSelection();
    //   console.log({ selection });
    // });

    editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  };

  const handleAlign = (value) => {
    console.log({ module });
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
      onClick: () => handleStyleChange("bold"),
    },
    {
      title: <img src={fontStyleItalic} />,
      // selected: fontStyle === "italic",
      onMouseUp: handleMouseUp,
      onClick: () => handleStyleChange("italic"),
    },
    {
      title: <img src={fontStyleUnderline} />,
      // selected: textDecoration === "underline",
      onMouseUp: handleMouseUp,
      onClick: () => handleStyleChange("underline"),
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
    },
  ];

  // const alignmentButtons = [];

  return (
    <section className={args.className}>
      <ButtonGroupTight buttons={buttons} divider={3} />
    </section>
  );
}
