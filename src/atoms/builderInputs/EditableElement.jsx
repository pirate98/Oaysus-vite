import classes from "./.module.scss";

export function EditableElement(props) {
  const { children, className, style } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;
  delete propsCopy.style;

  const Type = props.type;
  // console.log({ className });
  return (
    // <input {...propsCopy} className={classes.clean} defaultValue={children} />
    <div className={classes.w100 + " " + className} style={style}>
      <Type
        {...propsCopy}
        className={classes.clean}
        defaultValue={children}
        contentEditable={true}
        suppressContentEditableWarning={true}
        // dangerouslySetInnerHTML={{ __html: children }}
      >
        {children}
        <span contentEditable={false}></span>
      </Type>
    </div>
  );
}
