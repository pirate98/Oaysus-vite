import { SettingSection } from "../../atoms";
import { Visibility } from "../builderSettingFields";

export function Savings() {
  return (
    <SettingSection title={"Savings label"}>
      <Visibility text="Show savings" />
    </SettingSection>
  );
}
