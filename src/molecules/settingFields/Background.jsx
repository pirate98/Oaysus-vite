import classes from "./.module.scss";
import { ButtonGroup, PlainButton, SettingFieldContainer } from "../../atoms";
import { ColorSelector } from "../settingField/ColorSelector";

export function Background() {
  const buttons = [
    { title: "Auto" },
    { title: "Relative" },
    { title: "Absolute" },
  ];

  return (
    <SettingFieldContainer title={""}>
      <ColorSelector title={"Color"} />
      <div className={classes.singleAttribute}>
        <p>Image</p>
        <div className={classes.setting}>
          <div className={classes.imagePreview}></div>
          <PlainButton fullWidth color="success">
            Upload Image
          </PlainButton>
        </div>
      </div>
      <div className={classes.singleAttribute}>
        <p>Position</p>
        <ButtonGroup buttons={buttons} />
      </div>
    </SettingFieldContainer>
  );
}
