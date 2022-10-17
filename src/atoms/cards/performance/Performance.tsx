import { SettingsCard } from "../settings/SettingsCard";
import classes from "./Performance.module.scss";

type Props = {
  children: React.ReactNode;
} & typeof SettingsCard;

export const Performance = ({ children, ...props }: Props) => {
  return (
    <SettingsCard {...props} className={classes.card}>
      {children}
    </SettingsCard>
  );
};
