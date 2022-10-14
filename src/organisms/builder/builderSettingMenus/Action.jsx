import {
  SettingField,
  SettingFieldContainer,
  SettingSection,
  SettingSectionContainer,
} from "@/atoms";
import { InputWithKeyControls } from "@/molecules";
import {
  Margin,
  Style,
  Padding,
  Border,
  Layout,
} from "@/organisms/builder/builderSettingFieldGroups";
import { useGetSelectedPageComponent } from "@/hooks";
import { removePx } from "@/helpers/builder";
import { EditWrapper } from "@/organisms/builder/wrappers";

export function Action() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title"}>
          <Style data={selectedPageComponent["title"]} module={"title"} />
          <Margin data={selectedPageComponent["title"]} />
          <Padding data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"subTitle"}>
        <SettingSection title={"Value Label"}>
          <Style module={"subTitle"} data={selectedPageComponent["subTitle"]} />
          <Margin data={selectedPageComponent["subTitle"]} />
          <Padding data={selectedPageComponent["subTitle"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"buyButton"}>
        <SettingSection title={"Buy Button"}>
          <Style
            buttonBackground
            module={"buyButton"}
            data={selectedPageComponent["buyButton"]}
          />
          <SettingFieldContainer title={"SIZE"}>
            <SettingField fieldName={"Width"}>
              <InputWithKeyControls
                endAdornment={"px"}
                placeholder="Enter size"
                value={removePx(selectedPageComponent["buyButton"]["width"])}
                name={"width_px"}
              />
            </SettingField>
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
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
