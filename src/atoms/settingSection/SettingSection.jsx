import classes from "./SettingSection.module.scss";
import { ReactComponent as ArrowUp } from "../../assets/svg/arrowUp.svg";
import { useState } from "react";
import { CleanButton } from "../button/CleanButton";

export function SettingSection({ title, children }) {
  const [sectionOpen, setSectionOpen] = useState(true);

  return (
    <section className={classes.section}>
      <CleanButton onClick={() => setSectionOpen(!sectionOpen)}>
        <div className={classes.header}>
          <p className={classes.title}>{title}</p>
          <ArrowUp />
        </div>
      </CleanButton>
      {sectionOpen ? children : ""}
    </section>
  );
}
