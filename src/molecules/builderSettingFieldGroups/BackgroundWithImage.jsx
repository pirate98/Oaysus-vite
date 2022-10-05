import { SettingField, SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../builderSettingFields";

export function BackgroundWithImage({
  data,
  module,
  allowImageUpload = true,
  allowColorChange = true,
  title = "Color",
}) {
  return (
    <>
      {allowColorChange && (
        <ColorSelector
          title={title}
          name="backgroundColor"
          defaultValue={data.backgroundColor}
        />
      )}
      <>
        {allowImageUpload && (
          <SettingField fieldName={"Image"}>
            <ImageUpload name={"backgroundImage"} module={module} />
          </SettingField>
        )}
        <Position data={data} />
      </>
    </>
  );
}
