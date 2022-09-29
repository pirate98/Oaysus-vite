import {
  SettingFieldContainer,
  SettingSection,
  SettingSectionContainer,
} from "../../atoms";
import { Slider } from "../builderSettingFields";
import {
  Margin,
  Style,
  Padding,
  Background,
  Border,
} from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import { removePx } from "../helpers/builder";

export function CallToAction() {
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
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background
            data={selectedPageComponent["background"]}
            module={"background"}
          />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub title money"}>
          <Style data={selectedPageComponent["subTitle"]} />
          <Margin data={selectedPageComponent["subTitle"]} />
          <Padding data={selectedPageComponent["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style background weight data={selectedPageComponent["buyButton"]} />
          <SettingFieldContainer title={"SIZE"}>
            <Slider
              title={"Width"}
              defaultValue={removePx(
                selectedPageComponent["buyButton"]["width"]
              )}
              module={"buyButton"}
              name={"width"}
            />
          </SettingFieldContainer>
          <Border
            title={"BORDER"}
            data={selectedPageComponent["buyButton"]}
            module="buyButton"
          />
          <Margin data={selectedPageComponent["buyButton"]} />
          <Padding data={selectedPageComponent["buyButton"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
