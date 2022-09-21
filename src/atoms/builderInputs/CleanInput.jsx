import classes from "./.module.scss";

export function CleanInput(props) {
  const { children } = props;
  const propsCopy = { ...props };
  delete propsCopy.children;

  return (
    <input {...propsCopy} className={classes.clean} defaultValue={children} />
  );
}
