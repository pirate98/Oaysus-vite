import { Input, SettingFieldContainer } from "../../atoms";
import classes from "./.module.scss";

export function CountDown() {
  return (
    <SettingFieldContainer title={""}>
      <div className={classes.singleAttribute}>
        <p>Duration</p>
        <Input />
      </div>
    </SettingFieldContainer>
  );
}
