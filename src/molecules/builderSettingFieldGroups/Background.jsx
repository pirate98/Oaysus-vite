import { SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../builderSettingFields";

export function Background({ data, module, image = true, title }) {
  return (
    <SettingFieldContainer title={title}>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        defaultValue={data.color || data.backgroundColor}
      />
      {image && (
        <>
          <ImageUpload name={"backgroundImage"} module={module} />
          <Position data={data} />
        </>
      )}
    </SettingFieldContainer>
  );
}
