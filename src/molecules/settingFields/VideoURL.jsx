import { Input, SettingFieldContainer } from "../../atoms";
import classes from "./.module.scss";

export function VideoURL() {
  return (
    <SettingFieldContainer title={"Video URL"}>
      <p className={classes.p}>YouTube URL</p>
      <Input />
    </SettingFieldContainer>
  );
}
