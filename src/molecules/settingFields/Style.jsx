import {
  CustomAutocomplete,
  PxInput,
  SettingFieldContainer,
} from "../../atoms";
import classes from "./.module.scss";
import fieldClasses from "../settingField/.module.scss";
import { ColorSelector, FontStyles } from "../settingField";

export function Style({ styling = false }) {
  return (
    <SettingFieldContainer title={"STYLE"}>
      {styling && <FontStyles />}
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
