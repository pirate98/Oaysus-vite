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
import { useGetActiveComponent } from "../../hooks";

export function Style({
  background = false,
  styling = false,
  weight = false,
  alignment = false,
  module,
}) {
  const activeComponent = useGetActiveComponent();

  return (
    <SettingFieldContainer title={"STYLE"}>
      {background && (
        <ColorSelector name={"backgroundColor"} title={"Background"} />
      )}
      {styling && <FontStyles />}
      <FontFamily />
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
          value={activeComponent[module]["lineHeight"].replace("px", "")}
          name={"lineHeight_px"}
        />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Size</p>
        <PxInput
          placeholder="Enter size"
          name={"fontSize_px"}
          value={activeComponent[module]["fontSize"].replace("px", "")}
        />
      </div>
      {alignment && <Alignment />}
      <ColorSelector name={"backgroundColor"} title={"Font Color"} />
    </SettingFieldContainer>
  );
}
