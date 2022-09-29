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
import { useCallback, useEffect, useState } from "react";

const BOLD_THRESHOLD = 400;
const BOLD = 600;

export function FontStyles({ module, elementToFocus, ...args }) {
  const dispatch = useDispatch();

  const selectedPageComponent = useGetSelectedPageComponent();

  const { fontWeight, textAlign } =
    (selectedPageComponent && selectedPageComponent[module]) || {};

  const [editor] = useLexicalComposerContext();

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleStyleChange = (command) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  };

  const updateToolBar = useCallback(() => {
    const selection = $getSelection();

    // Update text format
    setIsBold(selection.hasFormat("bold"));
    setIsItalic(selection.hasFormat("italic"));
    setIsUnderline(selection.hasFormat("underline"));
  }, [editor]);

  useEffect(() => {
    const editorState = editor.getEditorState();

    // editorState.read(() => updateToolBar());
  }, [editor]);

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
      selected: isBold,
      onMouseUp: handleMouseUp,
      onClick: () => handleStyleChange("bold"),
    },
    {
      title: <img src={fontStyleItalic} />,
      selected: isItalic,
      onMouseUp: handleMouseUp,
      onClick: () => handleStyleChange("italic"),
    },
    {
      title: <img src={fontStyleUnderline} />,
      selected: isUnderline,
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
