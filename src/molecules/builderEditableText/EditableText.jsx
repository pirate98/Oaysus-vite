import { useState } from "react";
import { EditableElement } from "../../atoms";
import classes from "./.module.scss";

export function EditableText(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  return (
    <EditableElement
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={isFocused ? classes.textInput : ""}
      {...props}
    >
      {props.children}
    </EditableElement>
  );
}
