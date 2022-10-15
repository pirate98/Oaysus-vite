import { Input, SettingField, SettingSection } from "@/atoms";
import { Visibility } from "@/organisms/builder/builderSettingFields";

interface Props {
  data: Record<any, any>;
}

export function Quantity({ data }: Props) {
  return (
    <SettingSection title={"Quantity Selector"}>
      <Visibility text="Show quantity" data={data} />
      <SettingField fieldName={"Quantity"}>
        <Input />
      </SettingField>
    </SettingSection>
  );
}
