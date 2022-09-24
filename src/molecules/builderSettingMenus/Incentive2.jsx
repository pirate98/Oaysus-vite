import { SettingSection, SettingSectionContainer } from "../../atoms";

import {
  Margin,
  Style,
  Padding,
  Visibility,
  CountDown,
  Background,
} from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";

export function Incentive2() {
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponentName["title"]} />
          <Margin data={selectedPageComponentName["title"]} />
          <Padding data={selectedPageComponentName["title"]} />
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
