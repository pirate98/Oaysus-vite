import { Margin, Style, Padding, Background } from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Position } from "../settingField";

export function Content() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style weight />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Description"}>
        <Style styling />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Background"}>
        <Position />
      </SettingSection>
      <SettingSection title={"Layout & Spacing"}>
        <Margin />
        <Padding />
      </SettingSection>
    </SettingSectionContainer>
  );
}
