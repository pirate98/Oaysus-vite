import { $getSelection } from "lexical";
import { useState } from "react";

export function useUpdateToolBar() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const updateToolBar = (editorState) => {
    editorState.read(() => {
      const selection = $getSelection();

      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
    });
  };

  return { isBold, isItalic, isUnderline, updateToolBar };
}
