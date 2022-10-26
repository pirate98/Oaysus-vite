import { Input, Select, SettingField, SettingFieldContainer } from "@/atoms";
import { Visibility } from "@/organisms/builder/builderSettingFields";
import { BuilderModule } from "@/types/BuilderModule.type";

interface Props {
  data: Record<any, any>;
}

export function Discount({ data }: Props) {
  const options = [{ label: "Fixed amount", value: "" }];

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
      <Visibility data={data} text={"Show discount"} />
    </>
  );
}
