import classes from "./Template.module.scss";
import { Badge } from "@/atoms";

export function Template({
  name,
  image = "/image/empty-image.svg",
  isActive = false,
  ...props
}) {
  return (
    <div
      {...props}
      className={isActive ? classes.templateActive : classes.template}
    >
      {/* <img src={image} className={classes.image} /> */}
      <div className={classes.textBox}>
        <p className={classes.text}>{name}</p>
        <Badge dot={false} variant={isActive ? "green" : "gray"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      </div>
    </div>
  );
}
