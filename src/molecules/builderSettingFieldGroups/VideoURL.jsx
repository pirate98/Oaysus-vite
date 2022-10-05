import { Input, SettingFieldContainer } from "../../atoms";
import classes from "./.module.scss";

export function VideoURL() {
  return (
    <SettingFieldContainer title={""}>
      <p className={classes.p}>YouTube URL</p>
      <Input name={"url"} fullWidth />
    </SettingFieldContainer>
  );
}
