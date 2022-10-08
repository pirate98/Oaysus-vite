import { SettingsCard } from "../../../atoms/cards/settingsCard/SettingsCard";
import classes from "./General.module.scss";

export default function General() {
  return (
    <>
      <SettingsCard>
        <h3 className={classes.h3Custom}>App status</h3>
        <p>
          Oaysus app is currently <b>deactivated.</b>
        </p>
      </SettingsCard>
    </>
  );
}
