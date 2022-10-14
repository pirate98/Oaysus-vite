import { Distances } from "@/organisms/builder/builderSettingFields/Distances";
import { SettingFieldContainer } from "@/atoms";

export function Padding({ data }) {
  return (
    <SettingFieldContainer title={"PADDING"}>
      <Distances data={data} type={"padding"} />
    </SettingFieldContainer>
  );
}
