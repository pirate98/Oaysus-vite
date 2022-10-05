import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { ImageUpload, Position, Slider } from "../builderSettingFields";

import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import { SettingFieldContainer } from "../../atoms";
import { BackgroundImage } from "../builderSettingFieldGroups/BackgroundImage";
import { builderSettings } from "../../data/builderSettings";
const { background } = builderSettings?.fieldNames;
// console.log({ background });
export function Banner() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper>
        <SettingSection title={"Sizing"}>
          <Slider
            title={"Height"}
            name="height"
            defaultValue={selectedPageComponent["sizing"]["height"]}
            module={"sizing"}
            max={500}
          />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={background}>
        <SettingSection title={"Background"}>
          <BackgroundImage
            module={background}
            data={selectedPageComponent[background]}
          />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
