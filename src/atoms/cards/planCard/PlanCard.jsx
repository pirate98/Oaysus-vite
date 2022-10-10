import classes from "./PlanCard.module.scss";

export function PlanCard({ children, active }) {
  return (
    <div className={active ? classes.cardActive : classes.card}>{children}</div>
  );
}
