import { SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../builderSettingFields";

export function Background({ data, module }) {
  return (
    <SettingFieldContainer>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        defaultValue={data.color || data.backgroundColor}
      />
      <ImageUpload name={"backgroundImage"} module={module} />
      <Position data={data} />
    </SettingFieldContainer>
  );
}
