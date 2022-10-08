import classes from "./PlanCard.module.scss";

export function PlanCard({ children }) {
  return <div className={classes.card}>{children}</div>;
}
