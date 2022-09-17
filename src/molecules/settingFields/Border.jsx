import { SettingFieldContainer } from "../../atoms";
import { ColorSelector, Slider } from "../settingField";

export function Border({ title = "MARGIN" }) {
  return (
    <SettingFieldContainer title={title}>
      <Slider title={"Width"} />
      <Slider title={"Radius"} />
      <ColorSelector title={"Color"} />
    </SettingFieldContainer>
  );
}
