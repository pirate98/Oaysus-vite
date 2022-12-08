import {
  Margin,
  Style,
  Padding,
  Visibility,
  VideoURL,
  Layout,
} from "@/organisms/builder/builderSettingFieldGroups";
import { SettingSectionContainer } from "@/atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "@/atoms/settingSection/SettingSection";
import { EditWrapper } from "@/organisms/builder/wrappers";
import { useGetSelectedPageComponent } from "@/hooks";
import React from "react";

export function Video() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title"}>
          <Style data={selectedPageComponent["title"]} module={"title"} />
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
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
