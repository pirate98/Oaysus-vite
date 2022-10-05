import { Input, SettingField, SettingSection } from "../../atoms";
import { Visibility } from "../builderSettingFields";

export function Quantity() {
  return (
    <SettingSection title={"Quantity Selector"}>
      <Visibility text="Show quantity" />
      <SettingField fieldName={"Quantity"}>
        <Input />
      </SettingField>
    </SettingSection>
  );
}
