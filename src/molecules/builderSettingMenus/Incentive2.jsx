import { SettingSection, SettingSectionContainer } from "../../atoms";

import {
  Margin,
  Style,
  Padding,
  Visibility,
  CountDown,
  Background,
} from "../settingFields";

export function Incentive2() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Countdown"}>
        <CountDown />
        <Visibility />
      </SettingSection>
      <SettingSection title={"Background"}>
        <Background />
      </SettingSection>
      <SettingSection title={"Layout & Spacing"}>
        <Margin />
        <Padding />
      </SettingSection>
    </SettingSectionContainer>
  );
}
