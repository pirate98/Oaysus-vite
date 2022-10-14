import classes from "./SettingSection.module.scss";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrowUp.svg";
import { useState } from "react";
import { HiddenWrapper } from "../button/HiddenWrapper";

export function SettingSection({ title, children }) {
  const [sectionOpen, setSectionOpen] = useState(true);

  return (
    <section className={classes.section}>
      <HiddenWrapper
        className={classes.titleBar}
        fullWidth
        onClick={() => setSectionOpen(!sectionOpen)}
      >
        <div className={classes.header}>
          <p className={classes.title}>{title}</p>
          <ArrowUp />
        </div>
      </HiddenWrapper>
      {sectionOpen ? children : ""}
    </section>
  );
}
