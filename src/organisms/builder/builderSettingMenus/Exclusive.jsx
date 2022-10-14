import {
  Margin,
  Style,
  Padding,
  Visibility,
  CountDown,
  Layout,
} from "@/organisms/builder/builderSettingFieldGroups";
import { SettingSectionContainer } from "@/atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "@/atoms/settingSection/SettingSection";
import { EditWrapper } from "@/organisms/builder/wrappers";
import { useGetSelectedPageComponent } from "@/hooks";
import { builderSettings } from "@/data/builderSettings";
const {
  fieldNames: { layout, title, subTitle, countdown },
} = builderSettings;

export function Exclusive() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={title}>
        <SettingSection title={"Title"}>
          <Style data={selectedPageComponent[title]} module={"title"} />
          <Margin data={selectedPageComponent[title]} />
          <Padding data={selectedPageComponent[title]} />
          <Visibility data={selectedPageComponent[title]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={subTitle}>
        <SettingSection title={"Sub Title"}>
          <Style data={selectedPageComponent[subTitle]} module={"subTitle"} />
          <Margin data={selectedPageComponent[subTitle]} />
          <Padding data={selectedPageComponent[subTitle]} />
          <Visibility data={selectedPageComponent[subTitle]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={countdown}>
        <SettingSection title={"Countdown"}>
          <CountDown data={selectedPageComponent[countdown]} />
          <Visibility data={selectedPageComponent[countdown]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={layout}>
        <SettingSection title={"Layout"}>
          <Layout showImageUpload={true} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
