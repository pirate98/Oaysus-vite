import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
// import { EditableElement } from "@/atoms";
// import { ReactComponent as ContentCopySvg } from "@/assets/svg/contentCopy.svg";
import { updatePageComponents } from "@/pages/builder/builderSlice";
import classes from "./.module.scss";
import { TextToolBar } from "../../builderTextToolBar/TextToolBar";
import { componentsData } from "@/data/componentsData";
import { useCallback } from "react";
import { $getRoot, EditorState } from "lexical";
import { useDebounceHandler } from "@/hooks";
import { RootState } from "@/data/store";
import classNames from "classnames";

interface Props {
  style?: Record<any, any>;
  module: string;
  className?: string;
  children?: string;
}

export function EditableWithToolBar({
  style,
  module,
  className,
  children,
}: Props) {
  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state: RootState) => state);

  const componentIsOnTop = pageComponents[0].name === selectedPageComponentName;

  function onError(error: any) {
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

  const editorDebounce = useDebounceHandler(dispatch);
  const textDebounce = useDebounceHandler(dispatch);

  function onChangeLexical(editorState: EditorState) {
    editorState.read(() => {
      const text = $getRoot().getTextContent();
      // console.log(text);

      textDebounce(
        updatePageComponents({
          module,
          key: "text",
          value: text,
        })
      );
    });

    editorDebounce(
      updatePageComponents({
        module,
        key: "editorState",
        value: JSON.stringify(editorState),
      })
    );
  }

  const handleLexicalBlur = (e: any) => console.log({ lexicalBlur: e });

  const elementToFocus = useRef<HTMLDivElement>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: any) => {
    // console.log(e.currentTarget);
    setIsFocused(false);
  };
  // console.log({ style });
  const toolBarClassNames = classNames(classes.styleBar, {
    [classes.zIndex3000]: componentIsOnTop,
  });

  return (
    <>
      <LexicalComposer initialConfig={initialConfig}>
        <div
          className={classes.textInput + " " + (className ? className : "")}
          style={style}
        >
          <div
            ref={elementToFocus}
            tabIndex={-1}
            // classname is used to traverse parents in dom
            className={
              classes.editWrapper + " " + componentsData.EDITABLE_CLASS
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
            // style={style}
          >
            {/* <EditableElement type={type}>{children}</EditableElement> */}
            <RichTextPlugin
              contentEditable={<ContentEditable />}
              placeholder={<div></div>}
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
                className={toolBarClassNames}
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

function MyCustomAutoFocusPlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
}
