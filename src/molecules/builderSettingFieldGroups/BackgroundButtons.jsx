import { SettingFieldContainer } from "../../atoms";
import { ColorSelector } from "../builderSettingFields";

export function BackgroundButtons({ data, title }) {
  return (
    <SettingFieldContainer title={title}>
      <ColorSelector
        title={"Color"}
        name="backgroundColor"
        defaultValue={data.backgroundColor}
      />
      <ColorSelector
        title={"Hover Color"}
        name={["&:hover", "backgroundColor"]}
        defaultValue={data["&:hover"]?.backgroundColor}
      />
    </SettingFieldContainer>
  );
}
