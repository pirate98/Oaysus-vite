import { Margin, Style, Padding, Visibility, VideoURL } from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function Video() {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={activeComponent["title"]} />
          <Margin data={activeComponent["title"]} />
          <Padding data={activeComponent["title"]} />
          <Visibility data={activeComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"video"}>
        <SettingSection title={"Video URL"}>
          <VideoURL data={activeComponent["video"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
