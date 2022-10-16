import classes from "./UserTemplate.module.scss";
import { Badge } from "@/atoms";
import { InputHTMLAttributes } from "react";

type Props = {
  name?: string;
  isActive?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function UserTemplate({
  name,
  // image = "/image/empty-image.svg",
  isActive = false,
  ...props
}: Props) {
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
