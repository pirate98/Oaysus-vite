import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { ImageUpload, Slider } from "../settingField";

import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function Banner() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"sizing"}>
        <SettingSection title={"Sizing"}>
          <Slider title={"Height"} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <ImageUpload />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
