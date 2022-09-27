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
    <span
      id="editingWrapper"
      contentEditable={false}
      className={isFocused ? "" : classes.hide}
    >
      <span>
        <ContentCopySvg />
      </span>
      <FontStyles className={classes.styleBar} />
    </span>
  );

  const mutableProps = { ...props };
  delete mutableProps.style;

  return (
    <div
      className={classes.textInput + " " + (className ? className : "")}
      style={props.style}
    >
      <EditableElement
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...mutableProps}
        editControls={editControls}
      >
        {props.children}
      </EditableElement>
    </div>
  );
}
