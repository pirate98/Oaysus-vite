import { Margin, Style, Padding, Background, Border } from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Position, Slider } from "../settingField";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function Content2() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style weight alignment data={activeComponent["title"]} />
          <Margin data={activeComponent["title"]} />
          <Padding data={activeComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style styling alignment data={activeComponent["description"]} />
          <Margin data={activeComponent["description"]} />
          <Padding data={activeComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style weight background data={activeComponent["buyButton"]} />
          <Margin data={activeComponent["buyButton"]} />
          <Padding data={activeComponent["buyButton"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"size"}>
        <SettingSection title={"Size"}>
          <Slider title={"Width"} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"border"}>
        <SettingSection title={"Border"}>
          <Border />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={activeComponent["layout"]} />
          <Padding data={activeComponent["layout"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
