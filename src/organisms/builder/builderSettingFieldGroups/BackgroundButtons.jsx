import { SettingFieldContainer } from "@/atoms";
import { ColorSelector } from "@/organisms/builder/builderSettingFields";

export function BackgroundButtons({ data, title, module }) {
  return (
    <SettingFieldContainer title={title}>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        value={data.backgroundColor}
        module={module}
      />
      <ColorSelector
        title={"Hover Color"}
        name={["&:hover", "backgroundColor"]}
        value={data["&:hover"]?.backgroundColor}
        module={module}
      />
    </SettingFieldContainer>
  );
}
