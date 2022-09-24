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
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponentName["title"]} />
          <Margin data={selectedPageComponentName["title"]} />
          <Padding data={selectedPageComponentName["title"]} />
          <Visibility data={selectedPageComponentName["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"video"}>
        <SettingSection title={"Video URL"}>
          <VideoURL data={selectedPageComponentName["video"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
