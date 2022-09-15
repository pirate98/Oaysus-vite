import { Margin, Style } from "../builderSettings";
import { SettingSectionContainer } from "../settingSectionContainer/SettingSectionContainer";
import { SettingSection } from "../settingSection/SettingSection";

export function Video() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style />
        <Margin />
      </SettingSection>
      <SettingSection title={"Video URL"}></SettingSection>
    </SettingSectionContainer>
  );
}
