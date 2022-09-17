import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import { Margin, Padding, Style, Layout } from "../settingFields";

export function Product() {
  return (
    <SettingSectionContainer>
      <SettingSection title={"Layout"}>
        <Layout />
      </SettingSection>
      <SettingSection title={"Product Selected"}></SettingSection>
      <SettingSection title={"Reviews"}></SettingSection>
      <SettingSection title={"Product description"}>
        <Style />
        <Margin />
        <Padding />
      </SettingSection>
    </SettingSectionContainer>
  );
}
