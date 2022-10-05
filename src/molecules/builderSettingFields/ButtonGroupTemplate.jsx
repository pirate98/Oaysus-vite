import classes from "./.module.scss";
import { ButtonGroup, SettingField } from "../../atoms";

export function ButtonGroupTemplate({ title, buttons, className }) {
  // console.log({ selectedValue });
  return (
    <SettingField fieldName={title}>
      <ButtonGroup buttons={buttons} />
    </SettingField>
  );
}
