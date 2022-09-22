import { SettingFieldContainer, Switch2 } from "../../atoms";
import classes from "./.module.scss";

export function Visibility({ data }) {
  return (
    <SettingFieldContainer title={"VISIBILITY"}>
      <div className={classes.flexRow}>
        <p>Show content</p>
        <Switch2 name="visibility" />
      </div>
    </SettingFieldContainer>
  );
}
