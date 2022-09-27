import { useState } from "react";

import { EditableElement } from "../../../atoms";
import classes from "./.module.scss";
// import { ReactComponent as ContentCopySvg } from "../../../assets/svg/contentCopy.svg";
import { FontStyles } from "../../builderSettingFields/FontStyles";

export function EditableStyleable(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e) => {
    console.log("blur", e.target);
    // Set timeout for style options bar to catch onCLick
    // setTimeout(() => setIsFocused(false), 200);
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
        className={classes.editWrapper}
        onFocus={handleFocus}

        // onMouseUp={handleBlur}
        // onClick={handleBlur}
      >
        <EditableElement {...mutableProps} onBlur={handleBlur}>
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
          <FontStyles
            className={classes.styleBar}
            module={props["data-oa-name"]}
          />
        </span>
      </div>
    </div>
  );
}
