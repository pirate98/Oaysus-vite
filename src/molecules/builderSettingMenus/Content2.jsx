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
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style weight alignment data={selectedPageComponent["title"]} />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style alignment data={selectedPageComponent["description"]} />
          <Margin data={selectedPageComponent["description"]} />
          <Padding data={selectedPageComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style weight background data={selectedPageComponent["buyButton"]} />
          <Margin data={selectedPageComponent["buyButton"]} />
          <Padding data={selectedPageComponent["buyButton"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"size"}>
        <SettingSection title={"Size"}>
          <Slider
            title={"Width"}
            module={"size"}
            name={"width"}
            defaultValue={selectedPageComponent["size"]["width"]}
          />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"border"}>
        <SettingSection title={"Border"}>
          <Border data={selectedPageComponent["border"]} module="border" />
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
