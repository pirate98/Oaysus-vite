import classNames from "classnames";
import { HTMLAttributes } from "react";

import classes from "./UpsellsBase.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function UpsellsBase({ className, children, ...props }: Props) {
  const cls = classNames(classes.card, className);

  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}
