import { useState } from "react";

import { EditableElement } from "../../../atoms";
import classes from "./.module.scss";
import { ReactComponent as ContentCopySvg } from "../../../assets/svg/contentCopy.svg";
import { FontStyles } from "../../builderSettingFields/FontStyles";

export function EditableStyleable(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const { className } = props;

  // console.log({ isFocused });

  const editControls = (
    <span id="editingWrapper" contentEditable={false}>
      <span className={isFocused ? "" : classes.hide}>
        <ContentCopySvg />
      </span>
      <FontStyles className={isFocused ? classes.styleBar : classes.hide} />
    </span>
  );

  return (
    <div
      className={
        classes.w100 +
        " " +
        (className ? className : "") +
        " " +
        (isFocused ? classes.textInput : "")
      }
    >
      <EditableElement
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
        editControls={editControls}
      >
        {props.children}
      </EditableElement>
    </div>
  );
}
