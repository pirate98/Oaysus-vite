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

  const mutableProps = { ...props };
  delete mutableProps.style;

  return (
    <div
      className={classes.textInput + " " + (className ? className : "")}
      style={props.style}
    >
      <div className={classes.editWrapper}>
        <EditableElement
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...mutableProps}
        >
          {props.children}
        </EditableElement>
        <span
          id="editingWrapper"
          contentEditable={false}
          className={isFocused ? classes.focused : classes.hide}
        >
          {/* <span>
          <ContentCopySvg />
        </span> */}
          <FontStyles className={classes.styleBar} />
        </span>
      </div>
    </div>
  );
}
