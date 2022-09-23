import { MinInput, settingFieldContainer } from "../../atoms";
import classes from "./.module.scss";

export function CountDown({ data }) {
  return (
    <settingFieldContainer>
      <div className={classes.singleAttribute}>
        <p>Duration</p>
        <MinInput defaultValue={data.duration} name={"duration"} />
      </div>
    </settingFieldContainer>
  );
}
