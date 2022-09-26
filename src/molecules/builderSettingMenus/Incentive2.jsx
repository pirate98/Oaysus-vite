import { SettingSection, SettingSectionContainer } from "../../atoms";

import {
  Margin,
  Style,
  Padding,
  Visibility,
  CountDown,
  Background,
} from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";

export function Incentive2() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponent["title"]} />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"countdown"}>
        <SettingSection title={"Countdown"}>
          <CountDown data={selectedPageComponent["countdown"]} />
          <Visibility data={selectedPageComponent["countdown"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background
            data={selectedPageComponent["background"]}
            module={"background"}
          />
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
