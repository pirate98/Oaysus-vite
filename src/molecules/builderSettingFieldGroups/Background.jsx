import { SettingField, SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../builderSettingFields";

export function Background({ data, module, image = true, title }) {
  return (
    <SettingFieldContainer title={title}>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        defaultValue={data.backgroundColor}
      />
      {image && (
        <>
          <SettingField fieldName="Image">
            <ImageUpload name={"backgroundImage"} module={module} />
          </SettingField>
          <Position data={data} />
        </>
      )}
    </SettingFieldContainer>
  );
}
