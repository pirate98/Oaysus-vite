import { SettingSectionContainer } from "@/atoms/settingSection/SettingSectionContainer";
import { SettingSection } from "@/atoms/settingSection/SettingSection";
import {
  BackgroundButtons,
  ProductBackgroundImage,
  Border,
  Discount,
  Layout,
  Margin,
  Padding,
  Quantity,
  Savings,
  Style,
  Visibility,
} from "@/organisms/builder/builderSettingFieldGroups";
import { EditWrapper } from "@/organisms/builder/wrappers";
import { useGetSelectedPageComponent } from "@/hooks";
import {
  ColorSelector,
  ImageDisplayType,
  BackgroundPosition,
  ProductImageAlignment,
  ProductSelect,
  Slider,
  StarRating,
} from "@/organisms/builder/builderSettingFields";
import { SettingField, SettingFieldContainer } from "@/atoms";
import { builderSettings } from "@/data/builderSettings";
import { removePx } from "@/helpers/builder";
import { InputWithKeyControls } from "../../../molecules";
import { BuilderModule } from "../../../types/BuilderModule.type";

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
      <SettingSection title={"Product Selected"}>
        <ProductSelect />
      </SettingSection>
      <EditWrapper module={"image"}>
        <SettingSection title={"Product Image"}>
          <SettingFieldContainer>
            <ImageDisplayType />
            <ProductBackgroundImage
              allowImageUpload={component["imageDisplayType"] === "custom"}
              module={"image"}
              data={component["image"]}
              title={"Background"}
            />
            {/* <SettingFieldContainer>
            <BackgroundPosition module={"image"} data={component["image"]} />
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
          <Style module={title as BuilderModule} data={component[title]} />
          <Margin data={component[title]} />
          <Padding data={component[title]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={description}>
        <SettingSection title={"Description"}>
          <Style
            module={description as BuilderModule}
            data={component[description]}
          />
          <Margin data={component[description]} />
          <Padding data={component[description]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Discount"}>
          <Discount data={component?.discount} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper>
        <Savings data={component?.savings} />
      </EditWrapper>
      <EditWrapper>
        <Quantity data={component?.quantity} />
      </EditWrapper>
      <EditWrapper>
        <SettingSection title={"Payment Disclaimer"}>
          <Style data={component[disclaimer]} module={"paymentDisclaimer"} />
          <Margin data={component[disclaimer]} />
          <Padding data={component[disclaimer]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={buyButton}>
        <SettingSection title={"Buy Button"}>
          <Style
            module={buyButton as BuilderModule}
            data={component[buyButton]}
          />
          <BackgroundButtons
            module={buyButton as BuilderModule}
            data={component[buyButton]}
            title={"BACKGROUND"}
          />
          <SettingFieldContainer title={"SIZE"}>
            <SettingField fieldName={"Width"}>
              <InputWithKeyControls
                endAdornment={"px"}
                placeholder="Enter size"
                value={removePx(component[buyButton]?.width)}
                name={"width_px"}
              />
            </SettingField>
          </SettingFieldContainer>
          <Border
            data={component[buyButton]}
            title={"BORDER"}
            module={buyButton as BuilderModule}
          />
          <Margin data={component[buyButton]} />
          <Padding data={component[buyButton]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module={declineButton}>
        <SettingSection title={"Decline Button"}>
          <Style
            module={declineButton as BuilderModule}
            data={component[declineButton]}
          />
          <BackgroundButtons
            module={declineButton as BuilderModule}
            data={component[declineButton]}
            title={"BACKGROUND"}
          />
          <SettingFieldContainer title={"SIZE"}>
            <SettingField fieldName={"Width"}>
              <InputWithKeyControls
                placeholder="Enter size"
                value={removePx(component[declineButton]?.width)}
                name={"width_px"}
                endAdornment={"px"}
              ></InputWithKeyControls>
            </SettingField>
          </SettingFieldContainer>
          <Border
            data={component[declineButton]}
            title={"BORDER"}
            module={declineButton as BuilderModule}
          />
          <Margin data={component[declineButton]} />
          <Padding data={component[declineButton]} />
        </SettingSection>
      </EditWrapper>
      <EditWrapper module="layout">
        <SettingSection title={"Layout"}>
          <Layout>
            <SettingFieldContainer>
              <ProductImageAlignment />
            </SettingFieldContainer>
          </Layout>
        </SettingSection>
      </EditWrapper>
    </SettingSectionContainer>
  );
}
