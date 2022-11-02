import { Input, SettingFieldContainer } from "@/atoms";
import classes from "./.module.scss";

interface Props {
  data: Record<any, any>;
}

export function VideoURL({ data }: Props) {
  return (
    <SettingFieldContainer title={""}>
      <p className={classes.p}>YouTube URL</p>
      <Input name={"url"} fullWidth />
    </SettingFieldContainer>
  );
}
