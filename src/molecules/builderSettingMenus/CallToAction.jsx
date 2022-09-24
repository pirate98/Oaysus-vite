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
  const selectedPageComponentName = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponentName["title"]} />
          <Margin data={selectedPageComponentName["title"]} />
          <Padding data={selectedPageComponentName["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <Background data={selectedPageComponentName["background"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub title money"}>
          <Style data={selectedPageComponentName["subTitle"]} />
          <Margin data={selectedPageComponentName["subTitle"]} />
          <Padding data={selectedPageComponentName["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style
            background
            weight
            data={selectedPageComponentName["buyButton"]}
          />
          <SettingFieldContainer title={"SIZE"}>
            <Slider
              title={"Width"}
              defaultValue={removePx(
                selectedPageComponentName["buyButton"]["width"]
              )}
              module={"buyButton"}
              name={"width"}
            />
          </SettingFieldContainer>
          <Border
            title={"BORDER"}
            data={selectedPageComponentName["buyButton"]}
            module="buyButton"
          />
          <Margin data={selectedPageComponentName["buyButton"]} />
          <Padding data={selectedPageComponentName["buyButton"]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
