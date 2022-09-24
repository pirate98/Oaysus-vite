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
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style
            weight
            data={selectedPageComponentName["title"]}
            module={"title"}
          />
          <Margin data={selectedPageComponentName["title"]} />
          <Padding data={selectedPageComponentName["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style
            styling
            data={selectedPageComponentName["description"]}
            module={"description"}
          />
          <Margin data={selectedPageComponentName["description"]} />
          <Padding data={selectedPageComponentName["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <SettingFieldContainer>
            <Position data={selectedPageComponentName["background"]} />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={selectedPageComponentName["layout"]} />
          <Padding data={selectedPageComponentName["layout"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
