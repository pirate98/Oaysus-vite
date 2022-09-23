import classes from "./.module.scss";
import { Distances } from "../settingField/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Padding({ data }) {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances data={data} type={"padding"} />
    </SettingFieldContainer>
  );
}
