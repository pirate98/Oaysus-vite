import { SettingField, SettingFieldContainer } from "../../atoms";
import {
  ColorSelector,
  ImageUpload,
  BackgroundPosition,
} from "../builderSettingFields";

export function ProductBackgroundImage({
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
          <ImageUpload name={"backgroundImage"} module={module} />
        )}
        <BackgroundPosition data={data} />
      </>
    </>
  );
}
