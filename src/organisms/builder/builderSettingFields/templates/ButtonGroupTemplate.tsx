import { ButtonGroup, SettingField } from "@/atoms";

interface Props {
  title?: string;
  buttons: Record<any, any>;
}

export function ButtonGroupTemplate({ title, buttons }: Props) {
  return (
    <SettingField fieldName={title}>
      <ButtonGroup buttons={buttons} />
    </SettingField>
  );
}
