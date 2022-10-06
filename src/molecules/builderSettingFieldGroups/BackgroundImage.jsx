import {
  ColorSelector,
  ImageUpload,
  BackgroundPosition,
} from "../builderSettingFields";

export function BackgroundImage({ data, module }) {
  return (
    <>
      <ImageUpload name={"backgroundImage"} module={module} />
      <BackgroundPosition data={data} />
    </>
  );
}
