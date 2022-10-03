import {
  Input,
  PxInput,
  Select,
  SettingField,
  SettingFieldContainer,
} from "../../atoms";
import { Visibility } from "../builderSettingFields";

export function Discount() {
  const options = [{ label: "Fixed amount" }];

  return (
    <>
      <SettingFieldContainer>
        <SettingField fieldName={"Type"}>
          <Select options={options} />
        </SettingField>
        <SettingField fieldName={"Amount"}>
          <Input placeholder={0} />
        </SettingField>
      </SettingFieldContainer>
      <Visibility />
    </>
  );
}
