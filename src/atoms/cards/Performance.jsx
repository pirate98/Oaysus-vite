import { SettingsCard } from "./settingsCard/SettingsCard";
import classes from "./Performance.module.scss";

export const Performance = ({ children, ...props }) => {
  return (
    <SettingsCard {...props} className={classes.card}>
      {children}
    </SettingsCard>
  );
};
