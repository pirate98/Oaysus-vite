import classes from "./PlanCard.module.scss";

interface Props {
  children: React.ReactNode;
  active: boolean;
}

export function PlanCard({ children, active }: Props) {
  return (
    <div className={active ? classes.cardActive : classes.card}>{children}</div>
  );
}
