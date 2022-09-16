import classes from "./.module.scss";
import { Distances } from "../settingFieldMolecules/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Padding() {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances />
    </SettingFieldContainer>
  );
}
