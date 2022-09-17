import { SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../settingField";

export function Background() {
  return (
    <SettingFieldContainer title={""}>
      <ColorSelector title={"Color"} />
      <ImageUpload />
      <Position />
    </SettingFieldContainer>
  );
}
