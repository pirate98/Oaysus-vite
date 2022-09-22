import {
  CustomAutocomplete,
  PxInput,
  SettingFieldContainer,
} from "../../atoms";
import fieldClasses from "../settingField/.module.scss";
import {
  ColorSelector,
  FontStyles,
  Alignment,
  FontFamily,
} from "../settingField";
import { removePx } from "../helpers/builder";

export function Style({
  background = false,
  styling = false,
  weight = false,
  alignment = false,
  data = {},
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
      {styling && <FontStyles />}
      <FontFamily defaultValue={data["fontFamily"]} />
      {weight && (
        <div className={fieldClasses.singleAttribute}>
          <p>Font Weight</p>
          <CustomAutocomplete placeholder="Choose font weight" />
        </div>
      )}
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
