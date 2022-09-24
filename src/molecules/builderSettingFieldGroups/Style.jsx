import {
  CustomAutocomplete,
  PxInput,
  SettingFieldContainer,
} from "../../atoms";
import fieldClasses from "../builderSettingFields/.module.scss";
import {
  ColorSelector,
  FontStyles,
  Alignment,
  FontFamily,
  FontWeight,
} from "../builderSettingFields";
import { removePx } from "../helpers/builder";

export function Style({
  background = false,
  styling = false,
  weight = false,
  alignment = false,
  data = {},
  module,
}) {
  return (
    <SettingFieldContainer title={"STYLE"}>
      {background && (
        <ColorSelector
          defaultValue={data["backgroundColor"]}
          name={"backgroundColor"}
          title={"Background"}
        />
      )}
      {styling && <FontStyles module={module} />}
      <FontFamily defaultValue={data["fontFamily"]} />
      {weight && <FontWeight defaultValue={data["fontWeight"]} />}
      <div className={fieldClasses.singleAttribute}>
        <p>Line Height</p>
        <PxInput
          placeholder="Enter size"
          value={removePx(data["lineHeight"])}
          name={"lineHeight_px"}
        />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Size</p>
        <PxInput
          placeholder="Enter size"
          name={"fontSize_px"}
          value={removePx(data["fontSize"])}
        />
      </div>
      {alignment && <Alignment />}
      <ColorSelector
        defaultValue={data["color"]}
        name={"color"}
        title={"Font Color"}
      />
    </SettingFieldContainer>
  );
}
