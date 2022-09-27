import { forwardRef } from "react";

import classes from "./.module.scss";

export const EditableElement = forwardRef((props, ref) => {
  const { children, className } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;
  delete propsCopy.editControls;

  const Type = props.type;
  // console.log({ className });
  return (
    <Type
      ref={ref}
      {...propsCopy}
      className={classes.clean + " " + (className ? className : "")}
      defaultValue={children}
      contentEditable={true}
      suppressContentEditableWarning={true}
      // dangerouslySetInnerHTML={{ __html: children }}
    >
      {children}
    </Type>
  );
});
