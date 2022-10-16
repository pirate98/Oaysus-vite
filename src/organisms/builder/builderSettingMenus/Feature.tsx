import {
  Margin,
  Style,
  Padding,
  ProductBackgroundImage,
  Layout,
} from "@/organisms/builder/builderSettingFieldGroups";
import { SettingSectionContainer } from "@/atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "@/atoms/settingSection/SettingSection";
import {
  ColorSelector,
  ImageAlignment,
  BackgroundPosition,
} from "@/organisms/builder/builderSettingFields";
import { EditWrapper } from "@/organisms/builder/wrappers/builderMenuEditWrapper/EditWrapper";
import { useGetSelectedPageComponent } from "@/hooks";
import { builderSettings } from "@/data/builderSettings";
import { SettingFieldContainer } from "@/atoms";
import { BuilderModule } from "../../../types/BuilderModule.type";
const { image, layout } = builderSettings?.fieldNames;

export function Feature() {
  const component = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title"}>
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
            <ProductBackgroundImage
              module={image as BuilderModule}
              data={component[image]}
            />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={layout as BuilderModule}>
        <SettingSection title={"Layout"}>
          <Layout>
            <SettingFieldContainer>
              <ImageAlignment />
            </SettingFieldContainer>
          </Layout>
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
