import { useState } from "react";
import { EditableElement } from "../../atoms";
import classes from "./.module.scss";

export function EditableStyleable(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const { className } = props;
  return (
    <EditableElement
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
      className={
        (className ? className : "") +
        " " +
        (isFocused ? classes.textInput : "")
      }
    >
      {props.children}
    </EditableElement>
  );
}
