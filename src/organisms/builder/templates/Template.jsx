import classes from "./Templates.module.scss";
import { Badge } from "../../../atoms";
import constants from "../../../data/constants";

export function Template({
  image = "/image/empty-image.svg",
  isActive = false,
}) {
  return (
    <div className={isActive ? classes.templateActive : classes.template}>
      <img src={image} className={classes.image} />
      <div className={classes.textBox}>
        <p className={classes.text}>Style 1 template</p>
        <Badge dot={false} variant={isActive ? "green" : "gray"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      </div>
    </div>
  );
}
