import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Margin, Padding, Style } from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import { ProductImageAlignment } from "../builderSettingFields";

export function Product() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper>
        <SettingSection title={"Layout"}>
          <ProductImageAlignment />
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
