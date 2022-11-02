import { useCallback, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import {
  fontStyleBold,
  fontStyleItalic,
  fontStyleUnderline,
  alignCenter,
  alignLeft,
  alignRight,
} from "@/assets/svg";
import { useGetSelectedPageComponent } from "@/hooks";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import { ButtonGroupTight } from "@/atoms";
import { useUpdateToolBar } from "./hooks/useUpdateToolBar";

interface Props {
  module: string;
  className?: string;
  elementToFocus?: React.RefObject<HTMLDivElement>;
}

export function TextToolBar({ module, elementToFocus, className }: Props) {
  const dispatch = useDispatch();

  const selectedPageComponent = useGetSelectedPageComponent();

  const { textAlign } =
    (selectedPageComponent && selectedPageComponent[module]) || {};

  const { isBold, isItalic, isUnderline, updateToolBar } = useUpdateToolBar();

  const [editor] = useLexicalComposerContext();

  const handleStyleChange = useCallback(
    (command: TextFormatType) => {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
    },
    [editor]
  );

  const handleAlign = useCallback(
    (value: string) => {
      dispatch(
        updatePageComponents({
          module,
          key: "textAlign",
          value,
        })
      );
    },
    [dispatch]
  );

  const handleMouseUp = useCallback(() => {
    elementToFocus?.current?.focus();
  }, [elementToFocus]);

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

  const memoizedButtons = useMemo(
    () => buttons,
    [
      isBold,
      isItalic,
      isUnderline,
      textAlign,
      handleAlign,
      handleMouseUp,
      handleStyleChange,
    ]
  );
  // const alignmentButtons = [];
  // console.log("toolbar reloaded");

  return (
    <section className={className}>
      <ButtonGroupTight buttons={memoizedButtons} divider={3} />
      <OnChangePlugin onChange={updateToolBar} />
    </section>
  );
}
