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

export function Incentive1() {
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponentName["title"]} />
          <Margin data={selectedPageComponentName["title"]} />
          <Padding data={selectedPageComponentName["title"]} />
          <Visibility data={selectedPageComponentName["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub Title"}>
          <Style data={selectedPageComponentName["subTitle"]} />
          <Margin data={selectedPageComponentName["subTitle"]} />
          <Padding data={selectedPageComponentName["subTitle"]} />
          <Visibility data={selectedPageComponentName["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"countdown"}>
        <SettingSection title={"Countdown"}>
          <CountDown data={selectedPageComponentName["countdown"]} />
          <Visibility data={selectedPageComponentName["countdown"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background data={selectedPageComponentName["background"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={selectedPageComponentName["layout"]} />
          <Padding data={selectedPageComponentName["layout"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
