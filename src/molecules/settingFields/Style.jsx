import {
  CustomAutocomplete,
  PxInput,
  SettingFieldContainer,
} from "../../atoms";
import classes from "./.module.scss";
import fieldClasses from "../settingField/.module.scss";
import { ColorSelector } from "../settingField/ColorSelector";

export function Style() {
  return (
    <SettingFieldContainer title={"STYLE"}>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Family</p>
        <CustomAutocomplete placeholder="Choose a font" />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Line Height</p>
        <PxInput placeholder="Enter size" />
      </div>
      <div className={fieldClasses.singleAttribute}>
        <p>Font Size</p>
        <PxInput placeholder="Enter size" />
      </div>
      <ColorSelector title={"Font Color"} />
    </SettingFieldContainer>
  );
}
