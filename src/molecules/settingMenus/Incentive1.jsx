import {
  Margin,
  Style,
  Padding,
  Visibility,
  VideoURL,
  CountDown,
} from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";

export function Incentive1() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style />
        <Margin />
        <Padding />
        <Visibility />
      </SettingSection>
      <SettingSection title={"Sub Title"}>
        <Style />
        <Margin />
        <Padding />
        <Visibility />
      </SettingSection>
      <SettingSection title={"Countdown"}>
        <CountDown />
        <Visibility />
      </SettingSection>
      <SettingSection title={"Background"}></SettingSection>
      <SettingSection title={"Layout & Spacing"}>
        <Margin />
        <Padding />
      </SettingSection>
    </SettingSectionContainer>
  );
}
