import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { EditableElement } from "../../../atoms";
// import { ReactComponent as ContentCopySvg } from "../../../assets/svg/contentCopy.svg";
import { updatePageComponents } from "../../../pages/builder/builderSlice";
import classes from "./.module.scss";
import { TextToolBar } from "../../builderTextToolBar/TextToolBar";
import { componentsData } from "../../../data/componentsData";
import { useCallback } from "react";

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}

export function EditableWithToolBar({
  style,
  module,
  type,
  className,
  children,
}) {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  const componentIsOnTop = pageComponents[0].name === selectedPageComponentName;

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

  const [intervalId, setIntervalId] = useState(undefined);

  const debounceHandler = (...args) => {
    clearTimeout(intervalId);

    const _intervalId = setTimeout(() => dispatch.apply(this, args), 500);
    setIntervalId(_intervalId);
  };

  function onChangeLexical(editorState) {
    debounceHandler(
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
          style={style}
        >
          <div
            ref={elementToFocus}
            tabIndex="-1"
            // classname is used to traverse parents in dom
            className={
              classes.editWrapper + " " + componentsData.EDITABLE_CLASS
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            // style={style}
          >
            {/* <EditableElement type={type}>{children}</EditableElement> */}
            {/* <ToolbarPlugin /> */}
            <RichTextPlugin
              contentEditable={<ContentEditable />}
              // placeholder={<div>Enter some text...</div>}
            />
            <OnChangePlugin onChange={onChangeLexical} />
            {/* <HistoryPlugin />
          <MyCustomAutoFocusPlugin /> */}
            <span
              contentEditable={false}
              className={isFocused ? classes.focused : classes.hide}
            >
              {/* <span><ContentCopySvg /></span> */}
              <TextToolBar
                className={
                  classes.styleBar +
                  (componentIsOnTop ? " " + classes.zIndex3000 : "")
                }
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
