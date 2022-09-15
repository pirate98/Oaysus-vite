import classes from "./SettingSection.module.scss";
import { ReactComponent as ArrowUp } from "../../../../../../assets/svg/arrowUp.svg";

export function SettingSection({ title, children }) {
  return (
    <section className={classes.section}>
      <div className={classes.header}>
        <p className={classes.title}>{title}</p>
        <ArrowUp />
      </div>
      {children}
    </section>
  );
}
