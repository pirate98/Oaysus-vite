import classes from "./.module.scss";
import { Distances } from "../settingField/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Padding({ module }) {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances module={module} type={"padding"} />
    </SettingFieldContainer>
  );
}
