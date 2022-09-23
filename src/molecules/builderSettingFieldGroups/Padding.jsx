import classes from "./.module.scss";
import { Distances } from "../builderSettingFields/Distances";
import { settingFieldContainer } from "../../atoms";

export function Padding({ data }) {
  return (
    <settingFieldContainer title={"PADDING"}>
      <Distances data={data} type={"padding"} />
    </settingFieldContainer>
  );
}
