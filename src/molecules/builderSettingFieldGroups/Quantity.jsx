import { Input, SettingField, SettingSection } from "../../atoms";
import { Visibility } from "../builderSettingFields";

export function Quantity() {
  return (
    <SettingSection title={"QuantitySelector"}>
      <Visibility text="Show quantity" />
      <SettingField fieldName={"Quantity"}>
        <Input />
      </SettingField>
    </SettingSection>
  );
}
