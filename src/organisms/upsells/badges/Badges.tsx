import { Badge } from "@/atoms";
import classes from "./Badges.module.scss";

export function Badges() {
  return (
    <div className={classes.badgeContainer}>
      <Badge full={false}>4 Total</Badge>
      <Badge variant="green">3 Active</Badge>
      <Badge variant="gray">1 Inactive</Badge>
    </div>
  );
}
