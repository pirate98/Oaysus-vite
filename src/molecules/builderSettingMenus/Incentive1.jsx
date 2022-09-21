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

export function Incentive1() {
  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style module={"title"} />
          <Margin module={"title"} />
          <Padding module={"title"} />
          <Visibility module={"title"} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub Title"}>
          <Style module={"subTitle"} />
          <Margin module={"subTitle"} />
          <Padding module={"subTitle"} />
          <Visibility module={"subTitle"} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Countdown"}>
          <CountDown />
          <Visibility />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Background"}>
          <Background />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout & Spacing"}>
          <Margin module={"layout"} />
          <Padding module={"layout"} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
