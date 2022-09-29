import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Margin, Padding, Style, Layout } from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";

export function Product() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout data={selectedPageComponent["layout"]} />
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
          <Style
            module={"description"}
            data={selectedPageComponent["description"]}
          />
          <Margin data={selectedPageComponent["description"]} />
          <Padding data={selectedPageComponent["description"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
