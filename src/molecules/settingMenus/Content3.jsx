import { Margin, Style, Padding, Background, Border } from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Position, Slider } from "../settingField";

export function Content3() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style weight alignment />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Description"}>
        <Style styling alignment />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Buy Button"}>
        <Style weight background />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Size"}>
        <Slider title={"Width"} />
      </SettingSection>
      <SettingSection title={"Border"}>
        <Border />
      </SettingSection>
      <SettingSection title={"Layout & Spacing"}>
        <Margin />
        <Padding />
      </SettingSection>
    </SettingSectionContainer>
  );
}
