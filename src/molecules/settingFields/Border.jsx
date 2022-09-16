import { SettingFieldContainer } from "../../atoms";
import { ColorSelector, Slider } from "../settingField";

export function Border() {
  return (
    <SettingFieldContainer title={"MARGIN"}>
      <Slider title={"Width"} />
      <Slider title={"Radius"} />
      <ColorSelector title={"Color"} />
    </SettingFieldContainer>
  );
}
