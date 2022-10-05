import {
  SettingFieldContainer,
  SettingSection,
  SettingSectionContainer,
} from "../../atoms";
import { ColorSelector, Slider } from "../builderSettingFields";
import { Margin, Style, Padding, Border } from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import { removePx } from "../helpers/builder";

export function CallToAction() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style data={selectedPageComponent["title"]} module={"title"} />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"background"}>
        <SettingSection title={"Background"}>
          <SettingFieldContainer>
            <ColorSelector
              title={"Color"}
              name="backgroundColor"
              defaultValue={selectedPageComponent["background"]}
            />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Sub title money"}>
          <Style module={"subTitle"} data={selectedPageComponent["subTitle"]} />
          <Margin data={selectedPageComponent["subTitle"]} />
          <Padding data={selectedPageComponent["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style
            background
            module={"buyButton"}
            data={selectedPageComponent["buyButton"]}
          />
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
