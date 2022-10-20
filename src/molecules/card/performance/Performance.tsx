import { HTMLAttributes } from "react";

import classNames from "classnames";

import { UpsellsBase } from "@/atoms/cards/upsellsBase/UpsellsBase";
import classes from "./Performance.module.scss";

type Props = {
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function Performance({ className, children, ...props }: Props) {
  const cls = classNames(classes.card, className);

  return (
    <UpsellsBase className={cls} {...props}>
      {children}
    </UpsellsBase>
  );
}
