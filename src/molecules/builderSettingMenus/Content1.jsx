import {
  Margin,
  Style,
  Padding,
  Background,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Position } from "../builderSettingFields";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";
import { settingFieldContainer } from "../../atoms";

export function Content1() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style weight data={activeComponent["title"]} />
          <Margin data={activeComponent["title"]} />
          <Padding data={activeComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style
            styling
            data={activeComponent["description"]}
            module={"description"}
          />
          <Margin data={activeComponent["description"]} />
          <Padding data={activeComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <settingFieldContainer>
            <Position data={activeComponent["background"]} />
          </settingFieldContainer>
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
