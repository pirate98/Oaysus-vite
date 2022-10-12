import { Input, Select, SettingField, SettingFieldContainer } from "@/atoms";
import { Visibility } from "../builderSettingFields";

export function Discount() {
  const options = [{ label: "Fixed amount" }];

  return (
    <>
      <SettingFieldContainer>
        <SettingField fieldName={"Type"}>
          <Select.Primary options={options} />
        </SettingField>
        <SettingField fieldName={"Amount"}>
          <Input placeholder={""} />
        </SettingField>
      </SettingFieldContainer>
      <Visibility text={"Show discount"} />
    </>
  );
}
