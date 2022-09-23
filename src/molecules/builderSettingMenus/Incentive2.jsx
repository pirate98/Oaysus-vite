import { SettingSection, SettingSectionContainer } from "../../atoms";

import {
  Margin,
  Style,
  Padding,
  Visibility,
  CountDown,
  Background,
} from "../settingFields";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function Incentive2() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={activeComponent["title"]} />
          <Margin data={activeComponent["title"]} />
          <Padding data={activeComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"countdown"}>
        <SettingSection title={"Countdown"}>
          <CountDown data={activeComponent["countdown"]} />
          <Visibility data={activeComponent["countdown"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background data={activeComponent["background"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={activeComponent["layout"]} />
          <Padding data={activeComponent["layout"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
