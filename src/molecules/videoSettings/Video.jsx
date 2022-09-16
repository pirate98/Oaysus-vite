import { Margin, Style, Padding } from "../settings";
import { SettingSectionContainer } from "../settingSectionContainer/SettingSectionContainer";
import { SettingSection } from "../settingSection/SettingSection";

export function Video() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style />
        <Margin />
        <Padding />
      </SettingSection>
      <SettingSection title={"Video URL"}></SettingSection>
    </SettingSectionContainer>
  );
}
