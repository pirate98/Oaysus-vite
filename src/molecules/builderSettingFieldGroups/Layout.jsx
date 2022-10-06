import { useGetSelectedPageComponent } from "../../hooks";
import { Margin } from "./Margin";
import { Padding } from "./Padding";
import { builderSettings } from "../../data/builderSettings";
import { ColorSelector } from "../builderSettingFields";
import { SettingFieldContainer } from "../../atoms";
import { BackgroundImage } from "./BackgroundImage";
const {
  fieldNames: { layout },
} = builderSettings;

export function Layout({
  children,
  showColorSelector = true,
  showImageUpload = false,
}) {
  const component = useGetSelectedPageComponent();
  // console.log(component?.name, component[layout]?.backgroundColor);
  return (
    <>
      {children}
      <p>{component[layout].paddingLeft}</p>
      <SettingFieldContainer title="BACKGROUND">
        <ColorSelector
          title={"Color"}
          name="backgroundColor"
          module={layout}
          value={component[layout]?.backgroundColor}
        />
        {showImageUpload && (
          <BackgroundImage data={component[layout]} module={layout} />
        )}
      </SettingFieldContainer>
      <Margin data={component[layout]} />
      <Padding data={component[layout]} />
    </>
  );
}
