import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";

export function Content1() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}></SettingSection>
      <SettingSection title={"Description"}></SettingSection>
      <SettingSection title={"Background"}></SettingSection>
      <SettingSection title={"Layout & Spacing"}></SettingSection>
    </SettingSectionContainer>
  );
}
