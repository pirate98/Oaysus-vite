import { EditWrapper } from "@/organisms/builder/wrappers";
import { useGetSelectedPageComponent } from "@/hooks";
import {
  PxInput,
  SettingField,
  SettingSectionContainer,
  SettingSection,
} from "@/atoms";
import { removePx } from "@/helpers/builder";
import { builderSettings } from "@/data/builderSettings";
import { Layout } from "@/organisms/builder/builderSettingFieldGroups";
const {
  fieldNames: { layout, title, subTitle, countdown },
} = builderSettings;
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
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={layout}>
        <SettingSection title={"Layout"}>
          <Layout showImageUpload={true} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
