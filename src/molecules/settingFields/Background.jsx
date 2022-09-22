import { SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../settingField";

export function Background({ data }) {
  return (
    <SettingFieldContainer title={""}>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        defaultValue={data.color || data.backgroundColor}
      />
      <ImageUpload />
      <Position />
    </SettingFieldContainer>
  );
}
