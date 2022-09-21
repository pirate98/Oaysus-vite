import { Distances } from "../settingField/Distances";
import { SettingFieldContainer } from "../../atoms";

export function Margin({ module }) {
  return (
    <SettingFieldContainer title={"MARGIN"}>
      <Distances module={module} type={"margin"} />
    </SettingFieldContainer>
  );
}
