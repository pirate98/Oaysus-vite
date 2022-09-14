import { Style } from "../../../components/settings";
import { SettingBox } from "../../../components/settings/SettingBox";
import { SettingSection } from "../../../components/settings/SettingSection";

export function Video() {
  return (
    <SettingBox>
      <SettingSection title={"Title text"}>
        <Style />
      </SettingSection>
      <SettingSection title={"Video URL"}></SettingSection>
    </SettingBox>
  );
}
