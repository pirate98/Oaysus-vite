import { EditWrapper } from "@/organisms/builder/wrappers";
import { InputWithKeyControls } from "@/molecules";
import { useGetSelectedPageComponent } from "@/hooks";
import { SettingField, SettingSectionContainer, SettingSection } from "@/atoms";
import { removePx } from "@/helpers/builder";
import { builderSettings } from "@/data/builderSettings";
import { Layout } from "@/organisms/builder/builderSettingFieldGroups";
const {
  fieldNames: { layout },
} = builderSettings;
// console.log({ background });
export function Banner() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"sizing"}>
        <SettingSection title={"Sizing"}>
          <SettingField fieldName={"Height"}>
            <InputWithKeyControls
              endAdornment={"px"}
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
