import { SettingSection } from "@/atoms";
import { Visibility } from "@/organisms/builder/builderSettingFields";

interface Props {
  data: Record<any, any>;
}

export function Savings({ data }: Props) {
  return (
    <SettingSection title={"Savings Label"}>
      <Visibility data={data} text="Show savings" />
    </SettingSection>
  );
}
