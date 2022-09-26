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
import { useGetSelectedPageComponent } from "../../hooks";
import { SettingFieldContainer } from "../../atoms";

export function Content1() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style
            weight
            data={selectedPageComponent["title"]}
            module={"title"}
          />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style
            styling
            data={selectedPageComponent["description"]}
            module={"description"}
          />
          <Margin data={selectedPageComponent["description"]} />
          <Padding data={selectedPageComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <SettingFieldContainer>
            <Position data={selectedPageComponent["background"]} />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={selectedPageComponent["layout"]} />
          <Padding data={selectedPageComponent["layout"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
