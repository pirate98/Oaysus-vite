import { PxInput, SettingField, SettingFieldContainer } from "../../atoms";
import fieldClasses from "../builderSettingFields/.module.scss";
import {
  ColorSelector,
  Alignment,
  FontFamily,
  FontWeight,
} from "../builderSettingFields";
import { removePx } from "../../helpers/builder";
import { BackgroundButtons } from "./BackgroundButtons";

export function Style({
  background = false,
  styling = false,
  weight = true,
  alignment = false,
  data = {},
  module,
  buttonBackground = false,
}) {
  return (
    <>
      {buttonBackground ? (
        <BackgroundButtons data={data} title={"BACKGROUND"} module={module} />
      ) : null}
      <SettingFieldContainer title={"STYLE"}>
        {background && (
          <ColorSelector
            defaultValue={data["backgroundColor"]}
            name={"backgroundColor"}
            title={"Background"}
            module={module}
          />
        )}
        {/* {styling && <FontStyles module={module} />} */}
        <FontFamily defaultValue={data["fontFamily"]} module={module} />
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
          value={data["color"]}
          name={"color"}
          title={"Font Color"}
          module={module}
        />
      </SettingFieldContainer>
    </>
  );
}
