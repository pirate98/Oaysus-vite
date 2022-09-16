import { Distances } from "../settingFieldMolecules/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Margin() {
  return (
    <SettingFieldContainer title={"MARGIN"}>
      <Distances />
    </SettingFieldContainer>
  );
}
