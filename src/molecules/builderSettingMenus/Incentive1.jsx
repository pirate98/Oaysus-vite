import {
  Margin,
  Style,
  Padding,
  Visibility,
  VideoURL,
  CountDown,
  Background,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import builderData from "../../data/builderSettings";

export function Incentive1() {
  const selectedPageComponent = useGetSelectedPageComponent();
  const { title, subTitle, background, layout, countdown } =
    builderData.settingFieldNames;

  return (
    <SettingSectionContainer>
      <EditWrapper module={title}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponent[title]} />
          <Margin data={selectedPageComponent[title]} />
          <Padding data={selectedPageComponent[title]} />
          <Visibility data={selectedPageComponent[title]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={subTitle}>
        <SettingSection title={"Sub Title"}>
          <Style data={selectedPageComponent[subTitle]} />
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
      <EditWrapper module={background}>
        <SettingSection title={"Background"}>
          <Background
            data={selectedPageComponent[background]}
            module={background}
          />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={layout}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={selectedPageComponent[layout]} />
          <Padding data={selectedPageComponent[layout]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
