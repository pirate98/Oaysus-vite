import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Margin, Padding, Style, Layout } from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";

export function Product() {
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout data={selectedPageComponentName["layout"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"product"}>
        <SettingSection title={"Product Selected"}></SettingSection>
      </EditWrapper>
      <EditWrapper module={"reviews"}>
        <SettingSection title={"Reviews"}></SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Product description"}>
          <Style data={selectedPageComponentName["description"]} />
          <Margin data={selectedPageComponentName["description"]} />
          <Padding data={selectedPageComponentName["description"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
