import { SettingFieldContainer, Switch2 } from "@/atoms";
import classes from "./.module.scss";

interface Props {
  data: Record<any, any>;
  text?: string;
}

export function Visibility({ data, text = "Show Content" }: Props) {
  return (
    <SettingFieldContainer title={"VISIBILITY"}>
      <div className={classes.flexRow}>
        <p>{text}</p>
        <Switch2 name="visibility" checked={data && data.visibility} />
      </div>
    </SettingFieldContainer>
  );
}
