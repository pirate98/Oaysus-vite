import { MenuHorizontalDotSvg } from "@/assets/svg";
import classes from "./HorizontalDrop.module.scss";

export function HorizontalDrop({ className = "" }) {
  return (
    <div className={classes.container + " " + className}>
      <MenuHorizontalDotSvg />
    </div>
  );
}
