import {
  CustomAutocomplete,
  PxInput,
  SettingFieldContainer,
} from "../../atoms";
import classes from "./.module.scss";
import fieldClasses from "../settingField/.module.scss";
import { ColorSelector, FontStyles, Alignment } from "../settingField";

export function Style({
  background = false,
  styling = false,
  weight = false,
  alignment = false,
}) {
  return (
    <SettingFieldContainer title={"STYLE"}>
      {background && <ColorSelector title={"Background"} />}
      {styling && <FontStyles />}
      <div className={fieldClasses.singleAttribute}>
        <p>Font Family</p>
        <CustomAutocomplete placeholder="Choose a font" />
      </div>
      {weight && (
        <div className={fieldClasses.singleAttribute}>
          <p>Font Weight</p>
          <CustomAutocomplete placeholder="Choose font weight" />
        </div>
      )}
      <div className={fieldClasses.singleAttribute}>
        <p>Line Height</p>
        <PxInput placeholder="Enter size" />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Size</p>
        <PxInput placeholder="Enter size" />
      </div>
      {alignment && <Alignment />}
      <ColorSelector title={"Font Color"} />
    </SettingFieldContainer>
  );
}
