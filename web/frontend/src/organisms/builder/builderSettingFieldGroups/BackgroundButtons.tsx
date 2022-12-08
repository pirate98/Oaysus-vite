import { SettingFieldContainer } from "@/atoms";
import { ColorSelector } from "@/organisms/builder/builderSettingFields";
import { BuilderModule } from "../../../types/BuilderModule.type";

interface Props {
  data?: Record<any, any>;
  title?: string;
  module: BuilderModule;
}

export function BackgroundButtons({ data, title, module }: Props) {
  return (
    <SettingFieldContainer title={title}>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        value={data?.backgroundColor}
        module={module}
      />
      <ColorSelector
        title={"Hover Color"}
        name={["&:hover", "backgroundColor"]}
        value={data && data["&:hover"]?.backgroundColor}
        module={module}
      />
    </SettingFieldContainer>
  );
}
