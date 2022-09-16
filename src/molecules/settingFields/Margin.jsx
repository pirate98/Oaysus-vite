import { Distances } from "../settingField/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Margin() {
  return (
    <SettingFieldContainer title={"MARGIN"}>
      <Distances />
    </SettingFieldContainer>
  );
}
