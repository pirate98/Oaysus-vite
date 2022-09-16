import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { ImageUpload, Slider } from "../settingField";

export function Banner() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Sizing"}>
        <Slider title={"Height"} />
      </SettingSection>
      <SettingSection title={"Background"}>
        <ImageUpload />
      </SettingSection>
    </SettingSectionContainer>
  );
}
