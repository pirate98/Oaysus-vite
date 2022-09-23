import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { ImageUpload, Slider } from "../settingField";

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
            data={activeComponent["sizing"]["height"]}
            module={"sizing"}
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