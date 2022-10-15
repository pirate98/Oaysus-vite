import {
  ColorSelector,
  ImageUpload,
  BackgroundPosition,
} from "@/organisms/builder/builderSettingFields";
import { BuilderModule } from "@/types/BuilderModule.type";

interface Props {
  data: Record<any, any>;
  module: BuilderModule;
  allowImageUpload?: boolean;
  allowColorChange?: boolean;
  title?: string;
}

export function ProductBackgroundImage({
  data,
  module,
  allowImageUpload = true,
  allowColorChange = true,
  title = "Color",
}: Props) {
  return (
    <>
      {allowColorChange && (
        <ColorSelector
          title={title}
          name="backgroundColor"
          value={data?.backgroundColor}
          module={module}
        />
      )}
      <>
        {allowImageUpload && <ImageUpload module={module} />}
        <BackgroundPosition data={data} module={module} />
      </>
    </>
  );
}
