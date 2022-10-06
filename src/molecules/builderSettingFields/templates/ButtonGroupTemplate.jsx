import { ButtonGroup, SettingField } from "../../../atoms";

export function ButtonGroupTemplate({ title, buttons }) {
  return (
    <SettingField fieldName={title}>
      <ButtonGroup buttons={buttons} />
    </SettingField>
  );
}
