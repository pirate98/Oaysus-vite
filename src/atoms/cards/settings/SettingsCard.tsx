import { HTMLAttributes } from "react";

import classes from "./SettingsCard.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

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
