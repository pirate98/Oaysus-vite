import {
  Margin,
  Style,
  Padding,
  Background,
  Border,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Position, Slider } from "../builderSettingFields";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";

export function Content2() {
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style weight alignment data={selectedPageComponentName["title"]} />
          <Margin data={selectedPageComponentName["title"]} />
          <Padding data={selectedPageComponentName["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style
            styling
            alignment
            data={selectedPageComponentName["description"]}
          />
          <Margin data={selectedPageComponentName["description"]} />
          <Padding data={selectedPageComponentName["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style
            weight
            background
            data={selectedPageComponentName["buyButton"]}
          />
          <Margin data={selectedPageComponentName["buyButton"]} />
          <Padding data={selectedPageComponentName["buyButton"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"size"}>
        <SettingSection title={"Size"}>
          <Slider
            title={"Width"}
            module={"size"}
            name={"width"}
            defaultValue={selectedPageComponentName["size"]["width"]}
          />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"border"}>
        <SettingSection title={"Border"}>
          <Border data={selectedPageComponentName["border"]} module="border" />
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
