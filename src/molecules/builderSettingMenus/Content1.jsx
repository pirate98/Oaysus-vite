import {
  Margin,
  Style,
  Padding,
  ProductBackgroundImage,
  Layout,
} from "../builderSettingFieldGroups";
import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import {
  ColorSelector,
  ImageAlignment,
  BackgroundPosition,
} from "../builderSettingFields";
import { EditWrapper } from "../wrappers/builderMenuEditWrapper/EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import { builderSettings } from "../../data/builderSettings";
import { SettingFieldContainer } from "../../atoms";
const { image } = builderSettings?.fieldNames;

export function Content1() {
  const component = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title text"}>
          <Style weight data={component["title"]} module={"title"} />
          <Margin data={component["title"]} />
          <Padding data={component["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Description"}>
          <Style data={component["description"]} module={"description"} />
          <Margin data={component["description"]} />
          <Padding data={component["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={image}>
        <SettingSection title={"Product Image"}>
          <SettingFieldContainer>
            <ProductBackgroundImage module={image} data={component[image]} />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"layout"}>
        <SettingSection title={"Layout"}>
          <Layout module={"layout"}>
            <SettingFieldContainer>
              <ImageAlignment />
            </SettingFieldContainer>
          </Layout>
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
