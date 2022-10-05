import {
  Margin,
  Style,
  Padding,
  Background,
  BackgroundImage,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { ImageAlignment, Position } from "../builderSettingFields";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import { SettingFieldContainer } from "../../atoms";
import { ImageAtLeft, ImageAtRight } from "../builderButtons";
import { builderSettings } from "../../data/builderSettings";
const { background } = builderSettings?.fieldNames;

export function Content1() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper>
        <SettingSection title={"Layout"}>
          <ImageAlignment />
        </SettingSection>
      </EditWrapper>
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
            data={selectedPageComponent["description"]}
            module={"description"}
          />
          <Margin data={selectedPageComponent["description"]} />
          <Padding data={selectedPageComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={background}>
        <SettingSection title={"Background"}>
          <SettingFieldContainer>
            <BackgroundImage
              module={background}
              data={selectedPageComponent[background]}
            />
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
