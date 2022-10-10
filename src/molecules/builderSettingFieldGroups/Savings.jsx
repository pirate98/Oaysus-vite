import { SettingSection } from "../../atoms";
import { Visibility } from "../builderSettingFields";

export function Savings() {
  return (
    <SettingSection title={"Savings Label"}>
      <Visibility text="Show savings" />
    </SettingSection>
  );
}
