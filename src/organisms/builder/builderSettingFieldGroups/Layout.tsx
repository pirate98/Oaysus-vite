import { useGetSelectedPageComponent } from "@/hooks";
import { Margin } from "./Margin";
import { Padding } from "./Padding";
import { builderSettings } from "@/data/builderSettings";
import { ColorSelector } from "@/organisms/builder/builderSettingFields";
import { SettingFieldContainer } from "@/atoms";
import { BackgroundImage } from "./BackgroundImage";
import { BuilderModule } from "../../../types/BuilderModule.type";
const {
  fieldNames: { layout },
} = builderSettings;

interface Props {
  children?: React.ReactNode;
  showImageUpload?: boolean;
}

export function Layout({
  children,
  // showColorSelector = true,
  showImageUpload = false,
}: Props) {
  const component = useGetSelectedPageComponent();
  // console.log(component?.name, component[layout]?.backgroundColor);
  return (
    <>
      {children}
      <SettingFieldContainer title="BACKGROUND">
        <ColorSelector
          title={"Color"}
          name="backgroundColor"
          module={layout as BuilderModule}
          value={component[layout]?.backgroundColor}
        />
        {showImageUpload && (
          <BackgroundImage
            data={component[layout]}
            module={layout as BuilderModule}
          />
        )}
      </SettingFieldContainer>
      <Margin data={component[layout]} />
      <Padding data={component[layout]} />
    </>
  );
}
