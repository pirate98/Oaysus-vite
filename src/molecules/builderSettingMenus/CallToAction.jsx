import {
  SettingFieldContainer,
  SettingSection,
  SettingSectionContainer,
} from "../../atoms";
import { Slider } from "../settingField";
import { Margin, Style, Padding, Background, Border } from "../settingFields";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function CallToAction() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={activeComponent["title"]} />
          <Margin data={activeComponent["title"]} />
          <Padding data={activeComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background data={activeComponent["background"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub title money"}>
          <Style data={activeComponent["subTitle"]} />
          <Margin data={activeComponent["subTitle"]} />
          <Padding data={activeComponent["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style background weight data={activeComponent["buyButton"]} />
          <SettingFieldContainer title={"SIZE"}>
            <Slider title={"Width"} data={activeComponent["buyButton"]} />
          </SettingFieldContainer>
          <Border title={"BORDER"} data={activeComponent["buyButton"]} />
          <Margin data={activeComponent["buyButton"]} />
          <Padding data={activeComponent["buyButton"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
