import {
  Margin,
  Style,
  Padding,
  Border,
  Layout,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import {
  ColorSelector,
  BackgroundPosition,
  Slider,
} from "../builderSettingFields";
import { EditWrapper } from "../wrappers";
import { useGetSelectedPageComponent } from "../../hooks";
import { PxInput, SettingField, SettingFieldContainer } from "../../atoms";
import { removePx } from "../../helpers/builder";

export function Request() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title"}>
          <Style
            weight
            alignment
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
            alignment
            data={selectedPageComponent["description"]}
            module={"description"}
          />
          <Margin data={selectedPageComponent["description"]} />
          <Padding data={selectedPageComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style
            weight
            buttonBackground
            data={selectedPageComponent["buyButton"]}
            module={"buyButton"}
          />
          <Margin data={selectedPageComponent["buyButton"]} />
          <Padding data={selectedPageComponent["buyButton"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"size"}>
        <SettingSection title={"Size"}>
          <SettingField fieldName={"Width"}>
            <PxInput
              placeholder="Enter size"
              value={removePx(selectedPageComponent["size"]["width"])}
              name={"width_px"}
            />
          </SettingField>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"border"}>
        <SettingSection title={"Border"}>
          <Border data={selectedPageComponent["border"]} module="border" />
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
