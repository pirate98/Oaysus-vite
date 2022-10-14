import { PxInput, SettingField, SettingFieldContainer } from "@/atoms";
import {
  ColorSelector,
  Slider,
} from "@/organisms/builder/builderSettingFields";
import { removePx } from "@/helpers/builder";

export function Border({ title = "MARGIN", data, module }) {
  return (
    <SettingFieldContainer title={title}>
      <SettingField fieldName={"Width"}>
        <PxInput
          placeholder="Enter size"
          value={removePx(data["borderWidth"])}
          name={"borderWidth_px"}
        />
      </SettingField>
      <SettingField fieldName={"Radius"}>
        <PxInput
          placeholder="Enter size"
          value={removePx(data["borderRadius"])}
          name={"borderRadius_px"}
        />
      </SettingField>
      <ColorSelector
        title={"Color"}
        name="borderColor"
        module={module}
        value={data.borderColor}
      />
    </SettingFieldContainer>
  );
}
