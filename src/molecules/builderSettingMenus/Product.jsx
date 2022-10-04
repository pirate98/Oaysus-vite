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
  Slider,
  StarRating,
} from "../builderSettingFields";
import { SettingFieldContainer } from "../../atoms";
import { builderSettings } from "../../data/builderSettings";

export function Product() {
  const component = useGetSelectedPageComponent();

  const {
    title,
    subTitle,
    background,
    layout,
    countdown,
    disclaimer,
    buyButton,
    declineButton,
  } = builderSettings.fieldNames;

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
            <Position module={"image"} data={component["image"]} />
          </SettingFieldContainer>
          <Border title={"BORDER"} module={"image"} data={component["image"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"reviews"}>
        <SettingSection title={"Reviews"}>
          <StarRating />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={title}>
        <SettingSection title={"Title"}>
          <Style module={title} data={component[title]} />
          <Margin module={title} data={component[title]} />
          <Padding module={title} data={component[title]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"description"}>
        <SettingSection title={"Product description"}>
          <Style module={"description"} data={component["description"]} />
          <Margin data={component["description"]} />
          <Padding data={component["description"]} />
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
        <SettingSection title={"Payment disclaimer"}>
          <Style data={component[disclaimer]} />
          <Margin data={component[disclaimer]} />
          <Padding data={component[disclaimer]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Buy button"}>
          <Style data={component[buyButton]} />
          <Background
            data={component[buyButton]}
            image={false}
            title={"BACKGROUND"}
          />
          <SettingFieldContainer title={"Size"}>
            <Slider
              title={"Width"}
              name="width"
              defaultValue={component[buyButton]?.width}
              module={buyButton}
              max={500}
            />
          </SettingFieldContainer>
          <Border data={component[buyButton]} title={"BORDER"} />
          <Margin data={component[buyButton]} />
          <Padding data={component[buyButton]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Decline button"}>
          <Style data={component[declineButton]} />
          <Background
            data={component[declineButton]}
            image={false}
            title={"BACKGROUND"}
          />
          <SettingFieldContainer title={"Size"}>
            <Slider
              title={"Width"}
              name="width"
              defaultValue={component[declineButton]?.width}
              module={declineButton}
              max={500}
            />
          </SettingFieldContainer>
          <Border data={component[declineButton]} title={"BORDER"} />
          <Margin data={component[declineButton]} />
          <Padding data={component[declineButton]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
