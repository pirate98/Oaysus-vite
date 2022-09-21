import classes from "./.module.scss";
import { Distances } from "../settingField/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Padding() {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances type={"padding"} />
    </SettingFieldContainer>
  );
}
