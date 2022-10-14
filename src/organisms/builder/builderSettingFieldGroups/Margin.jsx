import { Distances } from "@/organisms/builder/builderSettingFields/Distances";
import { SettingFieldContainer } from "@/atoms";

export function Margin({ data }) {
  return (
    <SettingFieldContainer title={"MARGIN"}>
      <Distances data={data} type={"margin"} />
    </SettingFieldContainer>
  );
}
