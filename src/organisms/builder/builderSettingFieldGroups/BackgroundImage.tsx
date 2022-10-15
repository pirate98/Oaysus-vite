import { useGetSelectedPageComponent } from "@/hooks";
import {
  ImageUpload,
  BackgroundPosition,
} from "@/organisms/builder/builderSettingFields";
import { BuilderModule } from "@/types/BuilderModule.type";

interface Props {
  data?: Record<any, any>;
  module: BuilderModule;
}

export function BackgroundImage({ data, module }: Props) {
  const component = useGetSelectedPageComponent();

  return (
    <>
      <ImageUpload module={module} />
      {component?.backgroundPreview ? (
        <BackgroundPosition data={data} module={module} />
      ) : null}
    </>
  );
}
