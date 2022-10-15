import { SettingField, SettingFieldContainer } from "@/atoms";
import {
  ColorSelector,
  Slider,
} from "@/organisms/builder/builderSettingFields";
import { removePx } from "@/helpers/builder";
import { InputWithKeyControls } from "@/molecules";
import { BuilderModule } from "@/types/BuilderModule.type";

interface Props {
  data?: Record<any, any>;
  module: BuilderModule;
  title: string;
}

export function Border({ title = "MARGIN", data, module }: Props) {
  return (
    <SettingFieldContainer title={title}>
      <SettingField fieldName={"Width"}>
        <InputWithKeyControls
          endAdornment={"px"}
          placeholder="Enter size"
          value={removePx(data && data["borderWidth"])}
          name={"borderWidth_px"}
        />
      </SettingField>
      <SettingField fieldName={"Radius"}>
        <InputWithKeyControls
          endAdornment={"px"}
          placeholder="Enter size"
          value={removePx(data && data["borderRadius"])}
          name={"borderRadius_px"}
        />
      </SettingField>
      <ColorSelector
        title={"Color"}
        name="borderColor"
        module={module}
        value={data?.borderColor}
      />
    </SettingFieldContainer>
  );
}
