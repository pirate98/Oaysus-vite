import {
  SettingFieldContainer,
  SettingSection,
  SettingSectionContainer,
} from "../../atoms";
import { Slider } from "../settingField";
import { Margin, Style, Padding, Background, Border } from "../settingFields";

export function CallToAction() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Background"}>
        <Background />
      </SettingSection>
      <SettingSection title={"Sub title money"}>
        <Style />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Buy Button"}>
        <Style background weight />
        <SettingFieldContainer title={"SIZE"}>
          <Slider title={"Width"} />
        </SettingFieldContainer>
        <Border title={"BORDER"} />
        <Margin />
        <Padding />
      </SettingSection>
    </SettingSectionContainer>
  );
}
