import { SettingSectionContainer } from "../../atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "../../atoms/settingSection/SettingSection";
import {
  BackgroundButtons,
  BackgroundWithImage,
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
  ColorSelector,
  ImageDisplayType,
  Position,
  ProductImageAlignment,
  ProductSelect,
  Slider,
  StarRating,
} from "../builderSettingFields";
import { PxInput, SettingField, SettingFieldContainer } from "../../atoms";
import { builderSettings } from "../../data/builderSettings";
import { removePx } from "../helpers/builder";

export function Product() {
  const component = useGetSelectedPageComponent();

  const {
    title,
    subTitle,
    background,
    layout,
    countdown,
    description,
    disclaimer,
    buyButton,
    declineButton,
  } = builderSettings.fieldNames;

  return (
    <SettingSectionContainer>
      <EditWrapper module="layout">
        <SettingSection title={"Layout"}>
          <SettingFieldContainer>
            <ProductImageAlignment />
            <ColorSelector
              title={"Background"}
              name="backgroundColor"
              defaultValue={component[layout]?.backgroundColor}
            />
          </SettingFieldContainer>
        </SettingSection>
      </EditWrapper>
      <SettingSection title={"Product Selected"}>
        <ProductSelect />
      </SettingSection>
      <EditWrapper module={"image"}>
        <SettingSection title={"Product Image"}>
          <SettingFieldContainer>
            <ImageDisplayType />
            <BackgroundWithImage
              allowImageUpload={component["imageDisplayType"] === "custom"}
              module={"image"}
              data={component["image"]}
              title={"Background"}
            />
            {/* <SettingFieldContainer>
            <Position module={"image"} data={component["image"]} />
          </SettingFieldContainer> */}
          </SettingFieldContainer>
          <Border title={"BORDER"} module={"image"} data={component["image"]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={"reviews"}>
        <SettingSection title={"Reviews"}>
          <StarRating value={component["reviews"].rating} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={title}>
        <SettingSection title={"Title"}>
          <Style module={title} data={component[title]} />
          <Margin module={title} data={component[title]} />
          <Padding module={title} data={component[title]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={description}>
        <SettingSection title={"Description"}>
          <Style module={description} data={component[description]} />
          <Margin data={component[description]} />
          <Padding data={component[description]} />
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
        <SettingSection title={"Payment Disclaimer"}>
          <Style data={component[disclaimer]} />
          <Margin data={component[disclaimer]} />
          <Padding data={component[disclaimer]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={buyButton}>
        <SettingSection title={"Buy Button"}>
          <Style data={component[buyButton]} />
          <BackgroundButtons data={component[buyButton]} title={"BACKGROUND"} />
          <SettingFieldContainer title={"SIZE"}>
            <SettingField fieldName={"Width"}>
              <PxInput
                placeholder="Enter size"
                value={removePx(component[buyButton]?.width)}
                name={"width_px"}
              />
            </SettingField>
          </SettingFieldContainer>
          <Border
            data={component[buyButton]}
            title={"BORDER"}
            module={buyButton}
          />
          <Margin data={component[buyButton]} />
          <Padding data={component[buyButton]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={declineButton}>
        <SettingSection title={"Decline Button"}>
          <Style data={component[declineButton]} />
          <BackgroundButtons
            data={component[declineButton]}
            title={"BACKGROUND"}
          />
          <SettingFieldContainer title={"SIZE"}>
            <SettingField fieldName={"Width"}>
              <PxInput
                placeholder="Enter size"
                value={removePx(component[declineButton]?.width)}
                name={"width_px"}
              />
            </SettingField>
          </SettingFieldContainer>
          <Border data={component[declineButton]} title={"BORDER"} />
          <Margin data={component[declineButton]} />
          <Padding data={component[declineButton]} />
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
