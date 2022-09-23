import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { ImageUpload, Slider } from "../builderSettingFields";

import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

const changeHandlerMaker = (module) => (name, value) => {
  return { module, name, value };
};

export function Banner() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper>
        <SettingSection title={"Sizing"}>
          <Slider
            title={"Height"}
            name="height"
            defaultValue={activeComponent["sizing"]["height"]}
            module={"sizing"}
            max={500}
          />
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
