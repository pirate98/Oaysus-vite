import { PxInput, SettingField, SettingFieldContainer } from "../../atoms";
import fieldClasses from "../builderSettingFields/.module.scss";
import {
  ColorSelector,
  Alignment,
  FontFamily,
  FontWeight,
} from "../builderSettingFields";
import { removePx } from "../helpers/builder";

export function Style({
  background = false,
  styling = false,
  weight = true,
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
      {/* {styling && <FontStyles module={module} />} */}
      <FontFamily defaultValue={data["fontFamily"]} />
      {weight && <FontWeight module={module} />}
      <SettingField fieldName={"Line Height"}>
        <PxInput
          placeholder="Enter size"
          value={removePx(data["lineHeight"])}
          name={"lineHeight_px"}
        />
      </SettingField>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Size</p>
        <PxInput
          placeholder="Enter size"
          name={"fontSize_px"}
          value={removePx(data["fontSize"])}
        />
      </div>
      {/* {!alignment && <Alignment />} */}
      <ColorSelector
        defaultValue={data["color"]}
        name={"color"}
        title={"Font Color"}
      />
    </SettingFieldContainer>
  );
}
