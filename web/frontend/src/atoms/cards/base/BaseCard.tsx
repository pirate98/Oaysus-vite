import classes from "./BaseCard.module.scss";

interface Props {
  children: React.ReactNode;
}

export function BaseCard({ children }: Props) {
  return <section className={classes.card}>{children}</section>;
}
