import { useGetSelectedPageComponent } from "@/hooks";
import {
  ImageUpload,
  BackgroundPosition,
} from "@/organisms/builder/builderSettingFields";

export function BackgroundImage({ data, module }) {
  const component = useGetSelectedPageComponent();

  return (
    <>
      <ImageUpload name={"backgroundImage"} module={module} />
      {component?.backgroundPreview ? (
        <BackgroundPosition data={data} module={module} />
      ) : null}
    </>
  );
}
