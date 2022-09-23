import { settingFieldContainer } from "../../atoms";
import { ColorSelector, Slider } from "../builderSettingFields";

export function Border({ title = "MARGIN", data, module }) {
  return (
    <settingFieldContainer title={title}>
      <Slider
        module={module}
        title={"Width"}
        max={10}
        name="borderWidth"
        defaultValue={data.borderWidth}
      />
      <Slider
        module={module}
        title={"Radius"}
        max={100}
        name="borderRadius"
        defaultValue={data.borderRadius}
      />
      <ColorSelector
        title={"Color"}
        name="borderColor"
        defaultValue={data.borderColor}
      />
    </settingFieldContainer>
  );
}
