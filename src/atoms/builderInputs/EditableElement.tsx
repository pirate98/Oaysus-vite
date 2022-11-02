import { forwardRef } from "react";

import classes from "./.module.scss";

interface Props {
  type: string;
  children?: React.ReactNode;
  className?: string;
}

export const EditableElement = forwardRef((props: Props, ref) => {
  const { children, className } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;

  const Type = props.type;
  // console.log({ className });
  return (
    <Type
      ref={ref}
      {...propsCopy}
      // @ts-ignore:next-line
      className={classes.clean + (className ? ` ${className}` : ``)}
      defaultValue={children}
      contentEditable={true}
      suppressContentEditableWarning={true}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
});
