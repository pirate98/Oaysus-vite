import { SettingField, SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload, Position } from "../builderSettingFields";

export function BackgroundWithImage({
  data,
  module,
  allowImageUpload = true,
  allowColorChange = true,
  title = "Image",
}) {
  return (
    <>
      {allowColorChange && (
        <ColorSelector
          title={"Color"}
          name="backgroundColor"
          defaultValue={data.backgroundColor}
        />
      )}
      <>
        {allowImageUpload && (
          <SettingField fieldName={title}>
            <ImageUpload name={"backgroundImage"} module={module} />
          </SettingField>
        )}
        <Position data={data} />
      </>
    </>
  );
}
