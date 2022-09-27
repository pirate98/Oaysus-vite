import { useState, useRef } from "react";

import { EditableElement } from "../../../atoms";
import classes from "./.module.scss";
// import { ReactComponent as ContentCopySvg } from "../../../assets/svg/contentCopy.svg";
import { FontStyles } from "../../builderSettingFields/FontStyles";

export function EditableStyleable(props) {
  const elementToFocus = useRef();

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e) => {
    // console.log(e.currentTarget);
    setIsFocused(false);
  };

  const { className } = props;

  const mutableProps = { ...props };
  delete mutableProps.style;
  // console.log(props);
  return (
    <div
      className={classes.textInput + " " + (className ? className : "")}
      style={props.style}
    >
      <div
        ref={elementToFocus}
        tabIndex="-1"
        className={classes.editWrapper}
        onFocus={handleFocus}
        // onMouseUp={handleBlur}
        // onClick={handleBlur}
        onBlur={handleBlur}
      >
        <EditableElement {...mutableProps}>{props.children}</EditableElement>
        <span
          id="editingWrapper"
          contentEditable={false}
          className={isFocused ? classes.focused : classes.hide}
        >
          {/* <span>
          <ContentCopySvg />
        </span> */}
          <FontStyles
            className={classes.styleBar}
            module={props["data-oa-name"]}
            elementToFocus={elementToFocus}
          />
        </span>
      </div>
    </div>
  );
}
