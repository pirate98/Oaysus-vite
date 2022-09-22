import classes from "./.module.scss";

export function EditableElement(props) {
  const { children } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;

  const Type = props.type;

  return (
    // <input {...propsCopy} className={classes.clean} defaultValue={children} />
    <Type
      {...propsCopy}
      className={classes.clean}
      defaultValue={children}
      contentEditable={true}
      suppressContentEditableWarning={true}
      // dangerouslySetInnerHTML={{ __html: children }}
    >
      {children}
    </Type>
  );
}
