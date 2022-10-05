import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import {
  PxInput,
  SettingField,
  SettingSectionContainer,
  SettingSection,
  SettingFieldContainer,
} from "../../atoms";
import { BackgroundWithImage } from "../builderSettingFieldGroups/BackgroundWithImage";
import { builderSettings } from "../../data/builderSettings";
import { removePx } from "../helpers/builder";
const { background } = builderSettings?.fieldNames;
// console.log({ background });
export function Banner() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"sizing"}>
        <SettingSection title={"Sizing"}>
          <SettingField fieldName={"Height"}>
            <PxInput
              placeholder="Enter size"
              value={removePx(selectedPageComponent["sizing"]["height"])}
              name={"height_px"}
            />
          </SettingField>
          {/* <Slider
            title={"Height"}
            name="height"
            defaultValue={selectedPageComponent["sizing"]["height"]}
            module={"sizing"}
            max={500}
          /> */}
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={background}>
        <SettingSection title={"Background"}>
          <SettingFieldContainer>
            <BackgroundWithImage
              module={background}
              data={selectedPageComponent[background]}
            />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
