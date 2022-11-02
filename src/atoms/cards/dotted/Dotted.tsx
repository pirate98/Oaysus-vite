import { BaseCard } from "../base/BaseCard";
import classes from "./Dotted.module.scss";

interface Props {
  children: React.ReactNode;
}

export function Dotted({ children }: Props) {
  return (
    <BaseCard>
      <div className={classes.innerContainer}>{children}</div>
    </BaseCard>
  );
}
