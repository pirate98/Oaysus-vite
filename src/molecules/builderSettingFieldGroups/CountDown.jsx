import { MinInput, SettingFieldContainer } from "../../atoms";
import classes from "./.module.scss";

export function CountDown({ data }) {
  return (
    <SettingFieldContainer>
      <div className={classes.singleAttribute}>
        <p>Duration</p>
        <MinInput defaultValue={data.duration} name={"duration"} />
      </div>
    </SettingFieldContainer>
  );
}
