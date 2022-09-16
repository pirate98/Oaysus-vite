import classes from "./.module.scss";
import { ButtonGroup, SettingFieldContainer } from "../../atoms";
import { ColorSelector, ImageUpload } from "../settingField";

export function Background() {
  const buttons = [
    { title: "Auto" },
    { title: "Relative" },
    { title: "Absolute" },
  ];

  return (
    <SettingFieldContainer title={""}>
      <ColorSelector title={"Color"} />
      <ImageUpload />
      <div className={classes.singleAttribute}>
        <p>Position</p>
        <ButtonGroup buttons={buttons} />
      </div>
    </SettingFieldContainer>
  );
}
