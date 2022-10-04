import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import {
  Background,
  Border,
  Discount,
  Margin,
  Padding,
  Quantity,
  Savings,
  Style,
  Visibility,
} from "../builderSettingFieldGroups";
import { EditWrapper } from "./EditWrapper";
import { useGetSelectedPageComponent } from "../../hooks";
import {
  ImageDisplayType,
  Position,
  ProductImageAlignment,
  ProductSelect,
  StarRating,
} from "../builderSettingFields";
import { SettingFieldContainer } from "../../atoms";

export function Product() {
  const selectedPageComponent = useGetSelectedPageComponent();

  return (
    <SettingSectionContainer>
      <EditWrapper>
        <SettingSection title={"Layout"}>
          <ProductImageAlignment />
        </SettingSection>
      </EditWrapper>
      <SettingSection title={"Product selected"}>
        <ProductSelect />
      </SettingSection>
      <EditWrapper module={"image"}>
        <SettingSection title={"Product image"}>
          <ImageDisplayType />
          <SettingFieldContainer title={"BACKGROUND IMAGE"}>
            <Position module={"image"} data={selectedPageComponent["image"]} />
          </SettingFieldContainer>
          <Border
            title={"BORDER"}
            module={"image"}
            data={selectedPageComponent["image"]}
          />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"reviews"}>
        <SettingSection title={"Reviews"}>
          <StarRating />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"title"}>
        <SettingSection title={"Title"}>
          <Style module={"title"} data={selectedPageComponent["title"]} />
          <Margin module={"title"} data={selectedPageComponent["title"]} />
          <Padding module={"title"} data={selectedPageComponent["title"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Product description"}>
          <Style
            module={"description"}
            data={selectedPageComponent["description"]}
          />
          <Margin data={selectedPageComponent["description"]} />
          <Padding data={selectedPageComponent["description"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Discount"}>
          <Discount />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <Savings />
      </EditWrapper>
      <EditWrapper>
        <Quantity />
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Payment disclaimer"}></SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Buy button"}></SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Decline button"}></SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
