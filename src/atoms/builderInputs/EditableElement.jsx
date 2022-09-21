import classes from "./.module.scss";

export function EditableElement(props) {
  const { children } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;

  return (
    // <input {...propsCopy} className={classes.clean} defaultValue={children} />
    <p
      {...propsCopy}
      className={classes.clean}
      defaultValue={children}
      contentEditable={true}
    >
      {children}
    </p>
  );
}
