import { useState, useRef, useEffect } from "react";

import { useDispatch } from "react-redux";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import ToolbarPlugin from "./ToolBarPlugin";
// import { EditableElement } from "../../../atoms";
// import { ReactComponent as ContentCopySvg } from "../../../assets/svg/contentCopy.svg";
import { updatePageComponents } from "../../../pages/builder/builderSlice";
import classes from "./.module.scss";
import { FontStyles } from "../../builderSettingFields/FontStyles";

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
    onError,
    editorState: children,
    theme: {
      text: {
        bold: "editor-text-bold",
        italic: "editor-text-italic",
        overflowed: "editor-text-overflowed",
        hashtag: "editor-text-hashtag",
        underline: "editor-text-underline",
        strikethrough: "editor-text-strikethrough",
        underlineStrikethrough: "editor-text-underlineStrikethrough",
        code: "editor-text-code",
      },
    },
  };

  function onChangeLexical(editorState) {
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
  // console.log({ style });
  return (
    <>
      <LexicalComposer initialConfig={initialConfig} onBlur={handleLexicalBlur}>
        <div
          className={classes.textInput + " " + (className ? className : "")}
          // style={style}
        >
          <div
            ref={elementToFocus}
            tabIndex="-1"
            className={classes.editWrapper}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={style}
          >
            {/* <EditableElement type={type}>{children}</EditableElement> */}
            {/* <ToolbarPlugin /> */}
            <RichTextPlugin
              contentEditable={<ContentEditable />}
              placeholder={<div>Enter some text...</div>}
            />
            <OnChangePlugin onChange={onChangeLexical} />
            {/* <HistoryPlugin />
          <MyCustomAutoFocusPlugin /> */}
            <span
              id="editingWrapper"
              contentEditable={false}
              className={!isFocused ? classes.focused : classes.hide}
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
    </>
  );
}
