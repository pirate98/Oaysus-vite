import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Margin, Padding, Style, Layout } from "../settingFields";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function Product() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout data={activeComponent["layout"]} />
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
          <Style data={activeComponent["description"]} />
          <Margin data={activeComponent["description"]} />
          <Padding data={activeComponent["description"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
