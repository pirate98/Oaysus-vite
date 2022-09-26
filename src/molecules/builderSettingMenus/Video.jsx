import {
  Margin,
  Style,
  Padding,
  Visibility,
  VideoURL,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";

export function Video() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponent["title"]} />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
          <Visibility data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"video"}>
        <SettingSection title={"Video URL"}>
          <VideoURL data={selectedPageComponent["video"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
