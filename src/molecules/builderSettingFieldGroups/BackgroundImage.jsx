import { SettingFieldContainer } from "../../atoms";
import { ImageUpload, Position } from "../builderSettingFields";

export function BackgroundImage({ module, data }) {
  return (
    <SettingFieldContainer>
      <ImageUpload module={module} />
      <Position data={data} />
    </SettingFieldContainer>
  );
}
