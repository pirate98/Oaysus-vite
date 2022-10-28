import classes from "./SettingFieldContainer.module.scss";

interface Props {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

export function SettingFieldContainer({ title, children, className }: Props) {
  return (
    <div className={classes.container + (className ? ` ${className}` : "")}>
      {title && title.length ? <p className={classes.title}>{title}</p> : ""}
      {children}
    </div>
  );
}
