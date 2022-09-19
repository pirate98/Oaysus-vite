import { Margin, Style, Padding, Visibility, VideoURL } from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";

export function Video() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Title text"}>
        <Style />
        <Margin />
        <Padding />
        <Visibility />
      </SettingSection>
      <SettingSection title={"Video URL"}>
        <VideoURL />
      </SettingSection>
    </SettingSectionContainer>
  );
}
