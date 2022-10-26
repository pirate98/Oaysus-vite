import {
  SettingFieldContainer,
  SettingSection,
  SettingSectionContainer,
} from "@/atoms";

import {
  Margin,
  Style,
  Padding,
  Visibility,
  CountDown,
  Layout,
} from "@/organisms/builder/builderSettingFieldGroups";
import { EditWrapper } from "@/organisms/builder/wrappers";
import { useGetSelectedPageComponent } from "@/hooks";
import { ColorSelector } from "@/organisms/builder/builderSettingFields";

export function Lure() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title"}>
          <Style data={selectedPageComponent["title"]} module={"title"} />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"countdown"}>
        <SettingSection title={"Countdown"}>
          <CountDown data={selectedPageComponent["countdown"]} />
          <Visibility data={selectedPageComponent["countdown"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <SettingFieldContainer title={"Title"}>
            <ColorSelector
              module={"background"}
              title={"Color"}
              name="backgroundColor"
              value={selectedPageComponent["background"]["backgroundColor"]}
            />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
