import { settingFieldContainer, Switch2 } from "../../atoms";
import classes from "./.module.scss";

export function Visibility({ data }) {
  return (
    <settingFieldContainer title={"VISIBILITY"}>
      <div className={classes.flexRow}>
        <p>Show content</p>
        <Switch2 name="visibility" checked={data && data.visibility} />
      </div>
    </settingFieldContainer>
  );
}
