import classes from "./SettingsCard.module.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function SettingsCard({ className, children, ...props }: Props) {
  return (
    <div
      className={classes.card + (className ? " " + className : "")}
      {...props}
    >
      {children}
    </div>
  );
}
