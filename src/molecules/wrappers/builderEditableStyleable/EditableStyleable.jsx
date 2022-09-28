import { useState, useRef, useEffect } from "react";

import { EditableElement } from "../../../atoms";
import classes from "./.module.scss";
// import { ReactComponent as ContentCopySvg } from "../../../assets/svg/contentCopy.svg";
import { FontStyles } from "../../builderSettingFields/FontStyles";

import { $getRoot, $getSelection } from "lexical";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useDispatch } from "react-redux";
import { updatePageComponents } from "../../../pages/builder/builderSlice";
import ToolbarPlugin from "./ToolBarPlugin";

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

export function EditableStyleable({
  style,
  module,
  type,
  className,
  children,
}) {
  const dispatch = useDispatch();

  function onError(error) {
    console.error(error);
  }

  const initialConfig = {
    namespace: "MyEditor",
    theme: { border: "none" },
    onError,
    editorState: children,
  };

  function onChange(editorState) {
    // console.log(JSON.stringify(editorState));
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);
    });
    dispatch(
      updatePageComponents({
        module,
        key: "editorState",
        value: JSON.stringify(editorState),
      })
    );
  }

  const handleLexicalBlur = (e) => console.log({ lexicalBlur: e });

  const elementToFocus = useRef();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e) => {
    // console.log(e.currentTarget);
    setIsFocused(false);
  };

  return (
    <LexicalComposer initialConfig={initialConfig} onBlur={handleLexicalBlur}>
      <div
        className={classes.textInput + " " + (className ? className : "")}
        style={style}
      >
        <div
          ref={elementToFocus}
          tabIndex="-1"
          className={classes.editWrapper}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {/* <EditableElement type={type}>{children}</EditableElement> */}
          {/* <ToolbarPlugin /> */}
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={<div>Enter some text...</div>}
          />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <MyCustomAutoFocusPlugin />
          <span
            id="editingWrapper"
            contentEditable={false}
            className={isFocused ? classes.focused : classes.hide}
          >
            {/* <span><ContentCopySvg /></span> */}
            <FontStyles
              className={classes.styleBar}
              module={module}
              elementToFocus={elementToFocus}
            />
          </span>
        </div>
      </div>
    </LexicalComposer>
  );
}
