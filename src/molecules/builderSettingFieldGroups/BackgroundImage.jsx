import { SettingField, SettingFieldContainer } from "../../atoms";
import { ImageUpload, Position } from "../builderSettingFields";

export function BackgroundImage({ module, data }) {
  return (
    <>
      <SettingFieldContainer>
        <SettingField fieldName="Image">
          <ImageUpload module={module} />
        </SettingField>
        <Position data={data} />
      </SettingFieldContainer>
    </>
  );
}
