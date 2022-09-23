import { settingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../builderSettingFields";

export function Background({ data }) {
  return (
    <settingFieldContainer>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        defaultValue={data.color || data.backgroundColor}
      />
      <ImageUpload name={"backgroundImage"} />
      <Position data={data} />
    </settingFieldContainer>
  );
}
