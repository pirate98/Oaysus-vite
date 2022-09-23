import { Input, settingFieldContainer } from "../../atoms";
import classes from "./.module.scss";

export function VideoURL() {
  return (
    <settingFieldContainer title={""}>
      <p className={classes.p}>YouTube URL</p>
      <Input fullWidth />
    </settingFieldContainer>
  );
}
