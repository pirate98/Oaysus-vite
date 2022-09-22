import {
  Margin,
  Style,
  Padding,
  Visibility,
  VideoURL,
  CountDown,
  Background,
} from "../settingFields";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { EditWrapper } from "./EditWrapper";
import { useGetActiveComponent } from "../../hooks";

export function Incentive1() {
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
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub Title"}>
          <Style data={activeComponent["subTitle"]} />
          <Margin data={activeComponent["subTitle"]} />
          <Padding data={activeComponent["subTitle"]} />
          <Visibility data={activeComponent["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Countdown"}>
          <CountDown data={activeComponent["countdown"]} />
          <Visibility />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background data={activeComponent["background"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin data={activeComponent["layout"]} />
          <Padding data={activeComponent["layout"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
