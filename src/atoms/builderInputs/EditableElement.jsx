import classes from "./.module.scss";

export function EditableElement(props) {
  const { children, className, editControls } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;
  delete propsCopy.editControls;

  const Type = props.type;
  // console.log({ className });
  return (
    <Type
      {...propsCopy}
      className={classes.clean + " " + (className ? className : "")}
      defaultValue={children}
      contentEditable={true}
      suppressContentEditableWarning={true}
      // dangerouslySetInnerHTML={{ __html: children }}
    >
      {children}
      {editControls}
    </Type>
  );
}
